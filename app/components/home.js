import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {fetchAticals} from '../actions/articalActions'
import '../../public/icomoon/style.css'
import '../common/css/home.less'
import '../common/css/pager.less'

@connect(
    state => state.articals
)

export default class Home extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    static fetchData(state, dispatch) {
        const fetchTasks = []
        fetchTasks.push(
            dispatch(fetchAticals(state))
        )
        return fetchTasks
    }

    constructor(props) {
        super(props);
        this.navList = [{
            className: 'icon-home2',
            href: '/',
            navText: 'Home'
        }, {
            className: 'icon-price-tags',
            href: '/',
            navText: 'Categories'
        }, {
            className: 'icon-search',
            href: '/',
            navText: 'Search'
        }, {
            className: 'icon-github',
            href: 'https://github.com/demonray',
            navText: 'Github'
        }];
        this.state = {
            pageIndex: 0,
            pageSize: 8
        }
    }

    componentDidMount() {
        const {loaded} = this.props;
        if (!loaded) {
            this.constructor.fetchData(this.props, this.props.dispatch)
        }
    }

    goTo(pathname) {
        if (pathname.indexOf('http') > -1) {
            location.href = pathname;
            return;
        }
        this.context.router.push({
            pathname: pathname
        })
    }

    pager(page) {
        let pageIndex = this.state.pageIndex + page;
        if (pageIndex < 0 || pageIndex > Math.ceil(this.props.articals.length / this.state.pageSize) - 1)return;
        this.setState({
            pageIndex
        })
    }

    getCurPageList() {
        return this.props.articals.slice(this.state.pageIndex * this.state.pageSize, (this.state.pageIndex + 1) * this.state.pageSize);
    }


    render() {
        let articalList = this.getCurPageList(),
            navList = this.navList;
        return <div>
            <div id="layout" className="pure-g">
                <div id="cover" className="sidebar pure-u-1 pure-u-md-1-4">
                    <div className="header">
                        <img className="avatar-picture"
                             src="http://s.gravatar.com/avatar/e8f553206999a2adf4b0855497eca463?s=80"
                             alt="Author's picture"/>
                        <h4 className="sidebar-profile-name">Demon Ray</h4>
                        <h1 className="brand-title">A Sample Blog</h1>
                        <h2 className="brand-tagline">What's past is prologue</h2>

                        <nav className="nav">
                            <ul className="nav-list">
                                {navList.map((nav, index) => {
                                    return <li key={index} className="nav-item">
                                        <a className="pure-button" onClick={() => {
                                            this.goTo(nav.href)
                                        }}><span
                                            className='nav-item-title'>{nav.navText}</span><i
                                            className={nav.className}></i></a>
                                    </li>
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="content pure-u-1 pure-u-md-3-4">
                    <div>
                        <div className="posts">
                            {
                                articalList.map((artical) => {
                                    return <section className="post" key={artical.articalId}>
                                        <header className="post-header">
                                            <h2 className="post-title"><a
                                                href={'/artical/' + artical.articalId}>{artical.Title}</a></h2>

                                            <p className="post-meta">
                                                <span>{artical.Date}</span> under
                                                {artical.Tags.length && artical.Tags.map((tag, index) => {
                                                    return <a className="post-tag"
                                                              key={tag}> {tag.toUpperCase() + (index == artical.Tags.length - 1 ? '' : ',')}</a>
                                                })}
                                            </p>
                                        </header>

                                        <div className="post-description">
                                            <p>{artical.Desc}</p>
                                        </div>
                                    </section>
                                })
                            }
                        </div>
                        {Math.ceil(this.props.articals.length / this.state.pageSize) > 1 && <nav>
                            <ul className="pager">
                                <li className={this.state.pageIndex < 1 ? 'disabled' : ''}><a onClick={() => {
                                    this.pager(-1)
                                }}>Previous</a></li>
                                <li className={(this.state.pageIndex + 1) * this.state.pageSize >= this.props.articals.length ? 'disabled' : ''}>
                                    <a onClick={() => {
                                        this.pager(1)
                                    }}>Next</a></li>
                            </ul>
                        </nav>}
                    </div>
                </div>
            </div>
        </div>

    }
}

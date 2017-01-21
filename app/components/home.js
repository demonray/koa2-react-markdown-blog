import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchAticals } from '../actions/articalActions'
import '../common/css/home.less'
import '../../public/icomoon/style.css'

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
            navText: 'Home'
        }, {
            className: 'icon-price-tags',
            navText: 'Categories'
        }, {
            className: 'icon-search',
            navText: 'Search'
        }, {
            className: 'icon-github',
            navText: 'Github'
        }];
    }

    componentDidMount() {
        const { loaded } = this.props
        if (!loaded) {
            this.constructor.fetchData(this.props, this.props.dispatch)
        }
    }

    goTo(artical) {
        this.context.router.push({
            pathname: '/articals/' + artical.articalId
        })
    }


    render() {
            let articalList = this.props.articals,
                navList = this.navList;
            return <div><div id="layout" className="pure-g">
				    	<div id="cover" className="sidebar pure-u-1 pure-u-md-1-4">
				    	<div className="header">
                    		<img className="avatar-picture" src="http://s.gravatar.com/avatar/e8f553206999a2adf4b0855497eca463?s=80" alt="Author's picture"/>
                			<h4 className="sidebar-profile-name">Demon Ray</h4>
				            <h1 className="brand-title">A Sample Blog</h1>
				            <h2 className="brand-tagline">Creating a blog layout using Pure</h2>

				            <nav className="nav">
				                <ul className="nav-list">
				                {navList.map((nav,index) => {
				                	return <li key={index} className="nav-item">
				                        <a className="pure-button" href="http://purecss.io"><span className='nav-item-title'>{nav.navText}</span><i className={nav.className}></i></a>
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
								                        <h2 className="post-title"><a href={'/artical/'+artical.articalId}>{artical.Title}</a></h2>

								                        <p className="post-meta">
								                            <span>{artical.Date}</span> under <a className="post-category post-category-design" href="#">CSS</a> <a className="post-category post-category-pure" href="#">Pure</a>
								                        </p>
								                    </header>

								                    <div className="post-description">
								                        <p>{artical.Desc}</p>
								                    </div>
								                </section>
								    })
								}
				            </div>
				        </div>
				    </div>
				</div> < /div>

    }
}

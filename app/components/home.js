import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAticals} from '../actions/articalActions'
import NavList from './navlist'
import Footer from './footer'
import '../../public/icomoon/style.css'
import '../../public/css/blog.css'
import '../common/css/pager.less'

@connect(
    state => state.articals
)

export default class Home extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  static fetchData (state, dispatch) {
    const fetchTasks = []
    fetchTasks.push(
            dispatch(fetchAticals(state))
        )
    return fetchTasks
  }

  constructor (props) {
    super(props)
    this.state = {
      pageIndex: 0,
      pageSize: 8
    }
  }

  componentDidMount () {
    const {loaded} = this.props
    if (!loaded) {
      this.constructor.fetchData(this.props, this.props.dispatch)
    }
  }

  pager (page) {
    let pageIndex = this.state.pageIndex + page
    if (pageIndex < 0 || pageIndex > Math.ceil(this.props.articals.length / this.state.pageSize) - 1) return
    this.setState({
      pageIndex
    })
  }

  getCurPageList () {
    return this.props.articals.slice(this.state.pageIndex * this.state.pageSize, (this.state.pageIndex + 1) * this.state.pageSize)
  }

  goTo (pathname) {
    if (pathname.indexOf('http') > -1) {
      window.location.href = pathname
      return
    }
    this.context.router.push({
      pathname: pathname
    })
  }

  render () {
    let articalList = this.getCurPageList()
    return <div>
            <div id="layout" className="pure-g">
                <NavList/>
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
                                                              onClick={() => {
                                                                this.goTo('/tags/' + tag)
                                                              }}
                                                              key={tag}> {tag.toUpperCase() + (index === artical.Tags.length - 1 ? '' : ',')}</a>
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
                    <div className="pageInfo">page {this.state.pageIndex + 1} of {Math.ceil(this.props.articals.length / this.state.pageSize)}</div>
                    <Footer/>
                </div>
            </div>
        </div>
  }
}

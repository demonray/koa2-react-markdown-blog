import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavList from './navlist'
import Footer from './footer'
import {fetchAticals} from '../actions/articalActions'
import '../../public/icomoon/style.css'
import '../../public/css/blog.css'
import '../common/css/tags.less'

@connect(
    state => state.articals
)

export default class ArticalList extends Component {

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

  componentDidMount () {
    const {loaded} = this.props
    if (!loaded) {
      this.constructor.fetchData(this.props, this.props.dispatch)
    }
  }

  getTagsData () {
    let data = []
    this.props.articals.forEach((item) => {
      if (Array.isArray(item.Tags)) {
        data = data.concat(item.Tags)
      } else {
        data.push(item.Tags)
      }
    })
    return data
  }

  goTo (pathname) {
    this.context.router.push({
      pathname: pathname
    })
  }

  render () {
    let tags = this.getTagsData()
    return <div>
            <div id="layout" className="pure-g">
                <NavList/>
                <div className="center tag-cloud content pure-u-1 pure-u-md-3-4">
                    <div className="tag-cloud-title">All Tags({tags.length})</div>
                    <div className="tag-cloud-tags">
                        {tags.map((tag) => {
                          return <a key={tag} style={{fontSize: 14 + Math.random() * 20 + 'px'}} onClick={() => {
                            this.goTo(`/tags/${tag}`)
                          }}>{tag}</a>
                        })}
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
  }
}

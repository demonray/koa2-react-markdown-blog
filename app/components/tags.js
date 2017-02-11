import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAticals} from '../actions/articalActions'
import NavList from './navlist'
import '../../public/icomoon/style.css'
import '../../public/css/blog.css'

@connect(
    state => state.articals
)

export default class Tags extends Component {

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
    }

    componentDidMount() {
        const {loaded} = this.props
        if (!loaded) {
            this.constructor.fetchData(this.props, this.props.dispatch)
        }
    }

    getTagsData() {
        let data = {}, tags = [], arr = [];
        this.props.articals.forEach((item) => {
            let tagItem = item.Tags;
            if (!Array.isArray(item.Tags)) {
                tagItem = [item.Tags]
            }
            tagItem.forEach((tag) => {
                if (data[tag]) {
                    data[tag].push(item)
                } else {
                    data[tag] = [item]
                }
            })
        })

        for (let key in data) {
            arr.push({tag: key, tagInfo: data[key]})
        }

        return arr;
    }

    render() {
        let data = this.getTagsData();
        return <div>
            <div id="layout" className="pure-g">
                <NavList/>
                <div className="content pure-u-1 pure-u-md-3-4">
                    {
                        data.map((item) => {
                            return <div key={item.tag}>
                                <p>{item.tag}</p>
                                {item.tagInfo.map((artical, index) => {
                                    return <a key={index} href={'/artical/' + artical.articalId}>{artical.Title}</a>
                                })}
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    }
}
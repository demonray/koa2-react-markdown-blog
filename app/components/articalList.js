import React, { Component } from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {fetchAticals} from '../actions/articalActions'

@connect(
    state => state.articals
)

export default class ArticalList extends Component {

	static fetchData(state, dispatch) {
        const fetchTasks = []
        fetchTasks.push(
            dispatch(fetchAticals(state))
        )
        return fetchTasks
    }

	constructor(props){
		super(props);
	}

	componentDidMount() {
        const { loaded } = this.props
        if (!loaded) {
            this.constructor.fetchData(this.props, this.props.dispatch)
        }
    }

	render(){
		let articalList = this.props.articals
		return <div>
			{articalList.map((artical)=>{
				return <li key={artical.articalId}><a href={`/artical/${artical.articalId}`}>{artical.Title}</a></li>
			})}
		</div>
	}
}
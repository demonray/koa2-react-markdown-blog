import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(
    state => state.server
)

export default class App extends Component {
  render () {
    return (<div>
    {this.props.children}
    </div>)
  }
}

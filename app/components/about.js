import React, {Component} from 'react'
import NavList from './navlist'
import '../../public/icomoon/style.css'
import '../../public/css/blog.css'

export default class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div id="layout" className="pure-g">
                <NavList/>
                <div className="content pure-u-1 pure-u-md-3-4">
                    <div className="about center">
                        <p>About Me</p>
                        <p>码农？</p>
                        <p>IT民工？</p>
                        <p>程序猿？</p>
                        <p>前端攻城师？</p>
                        <p>怎么叫都一样，都是折腾代码的</p>
                        <p>喜欢看美剧，玩魔方。。。</p>
                        <p>先后折腾过几次博客，想写点东西，但都只是搭建完就没下文了，大概是太懒了</p>
                    </div>
                </div>
            </div>
        </div>
    }
}
/**
 * Created by DemonRay on 11/02/2017.
 */

import React, {Component} from 'react'
import '../../public/icomoon/style.css'
import '../../public/css/blog.css'

export default class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <footer className="footer center">
            <span className="copyrights">
            Copyrights © 2017 Demon Ray. Some Rights Reserved.
            </span>
        </footer>
    }

}
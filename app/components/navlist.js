/**
 * Created by DemonRay on 11/02/2017.
 */
import React, {Component} from 'react'
import '../common/css/nav.less'

export default class NavList extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.navList = [{
            className: 'icon-home2',
            href: '/',
            navText: 'Home'
        }, {
            className: 'icon-price-tags',
            href: '/tags',
            navText: 'Tags'
        }, {
            className: 'icon-profile',
            href: '/about',
            navText: 'About'
        }, {
            className: 'icon-github',
            href: 'https://github.com/demonray',
            navText: 'Github'
        }];
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


    render() {
        let navList = this.navList;
        return <div id="cover" className="sidebar pure-u-1 pure-u-md-1-4">
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

    }
}

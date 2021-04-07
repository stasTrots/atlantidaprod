import React from 'react'
import './header.css'
import Menu from './Menu/Menu'
import HeaderIntro from './Intro/HeaderIntro'

const Header = () => {
    return (
        <header className="header">
        <div className="container">
            <div className="row header-position">
                <div className="col-xs-12">
                    <Menu/>
                </div>
            </div>
        </div>
        <HeaderIntro/>
        <div className="menu-back"></div>
    </header>
    )
}
export default Header
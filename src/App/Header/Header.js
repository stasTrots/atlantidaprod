import React from 'react'
import './header.css'
import Menu from './Menu/Menu'
import HeaderIntro from './Intro/HeaderIntro'

const Header = ({
    openClickMenu,
    show
}) => {
    return (
        <header className="header">
        <div className="container">
            <div className="row header-position">
                <div className="col-xs-12">
                    <Menu
                    openClickMenu={openClickMenu}
                    show={show}/>
                </div>
            </div>
        </div>
        <HeaderIntro/>
        
    </header>
    )
}
export default Header
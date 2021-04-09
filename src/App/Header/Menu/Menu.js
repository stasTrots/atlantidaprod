import React from 'react'
import './menu.css'
import Burger from './Burger/Burger'
import BurgerMenu from './BurgerMenu/BurgerMenu'


const Menu = ({
    openClickMenu,
    show
}) => {
    

    
        return (
            <div className="logo">
                <img src="image/logo.png" alt="logo" className="img-logo" />
                <h2 className="logo-text">atlantida</h2>
                <Burger 
                openClickMenu={openClickMenu}/>
                
                <BurgerMenu 
                show={show}/>    
                
                
                
                
            </div>
    )
    
    
    
}

export default Menu
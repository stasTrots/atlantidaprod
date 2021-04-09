import React from 'react'

const Burger = ({
    openClickMenu
}) => {
    return (
        <div className="nav-mobile-menu" onClick={openClickMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
    )
}

export default Burger
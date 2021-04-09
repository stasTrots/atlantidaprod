import React from 'react'


const BurgerMenu = ({
    show
}) => {
    let activeMenu = "menu";
    let activeMenu2 = "menu2 mobile-menu-none";
    let menuBack = "menu-back"
    if(show) {
        activeMenu = "menu active"
        activeMenu2 = "menu2 active mobile-menu-none"
        menuBack = "menu-back active-back"
    }
    return (
            <div>
                <nav className={activeMenu} >
                    <a href="/" className="list-style">home</a>
                    <a href="/" className="list-style">about</a>
                    <a href="/" className="list-style">services</a>
                    <a href="/" className="list-style">history</a>
                    <a href="/" className="list-style">team</a>
                    <a href="/" className="list-style">portfolio</a>
                    <a href="/" className="list-style">prices</a>
                    <a href="/" className="list-style">blog</a>
                    <a href="/" className="list-style">contact</a>
                    <div className="mereji">
                        <img src="image/icon_foot_1.png" alt="" className="meregi-img" />
                        <img src="image/icon_foot_2.png" alt="" className="meregi-img" />
                        <img src="image/icon_foot_4.png" alt="" className="meregi-img" />
                    </div>
                    
                    </nav>  
                    <nav className={activeMenu2} >
                    <a href="/" className="list-style">home</a>
                    <a href="/" className="list-style">about</a>
                    <a href="/" className="list-style">services</a>
                    <a href="/" className="list-style">history</a>
                    <a href="/" className="list-style">team</a>
                    <a href="/" className="list-style">portfolio</a>
                    <a href="/" className="list-style">prices</a>
                    <a href="/" className="list-style">blog</a>
                    <a href="/" className="list-style">contact</a>
                    <div className="mereji">
                        <img src="image/icon_foot_1.png" alt="" className="meregi-img" />
                        <img src="image/icon_foot_2.png" alt="" className="meregi-img" />
                        <img src="image/icon_foot_4.png" alt="" className="meregi-img" />
                    </div>
                </nav>  
                <div className={menuBack}></div> 
            </div> 
    )
}
export default BurgerMenu
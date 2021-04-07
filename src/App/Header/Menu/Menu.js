import React from 'react'
import './menu.css'


const Menu = () => {

//     let menu = document.querySelector('.menu');
//   let navMenu = document.querySelector('.nav-mobile-menu');
//   let menu2 = document.querySelector('.menu2');
//   let backFon = document.querySelector('.menu-back');
//   let closeBtn = document.querySelector('.close-btn');

//     openMenu() {
//             navMenu.classList.toggle("active");
//              if(navMenu.classList.contains("active")) {
//                 menu.classList.add("active");
//                 menu2.classList.add("active");
//                 backFon.classList.add("active-back");
//                 closeBtn.classList.add('close-btn-active');
//                 closeBtn.addEventListener('click', function() {
//                     closeBtn.classList.remove('close-btn-active')
//                     menu.classList.remove("active")
//                     backFon.classList.remove("active-back")
//                     navMenu.classList.remove('active')
//                 })
//             } else {
//                 menu.classList.remove("active");
//                 menu2.classList.remove("active");
//                 backFon.classList.remove("active-back");
//                 navMenu.classList.remove('active');
//             }
//     }
    
    return (
            <div className="logo">
                <img src="image/logo.png" alt="logo" className="img-logo" />
                <h2 className="logo-text">atlantida</h2>
                <div className="nav-mobile-menu" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className="menu">
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
                <nav className="menu2 mobile-menu-none">
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
            </div>
    )
}

export default Menu
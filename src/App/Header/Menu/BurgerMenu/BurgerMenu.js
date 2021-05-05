import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const BurgerMenu = ({
    show,
    isLiked
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
                    <Link to="/" className="list-style">home</Link>
                    <Link to="/" className="list-style">about</Link>
                    <Link to="/" className="list-style">services</Link>
                    <Link to="/" className="list-style">history</Link>
                    <Link to="/" className="list-style">team</Link>
                    <Link to="/" className="list-style">portfolio</Link>
                    <Link to="/likepage" className="list-style">I like it:  {
                            Object.keys(isLiked).reduce((accObj, id)=>(
                                accObj + isLiked[id]
                            ),0 )
                        }
                         </Link>
                    <Link to="/postlist"  className="list-style">blog</Link>
                    <Link to="/" className="list-style">contact</Link>
                    <div className="mereji">
                        <img src="/image/icon_foot_1.png" alt="" className="meregi-img" />
                        <img src="/image/icon_foot_2.png" alt="" className="meregi-img" />
                        <img src="/image/icon_foot_4.png" alt="" className="meregi-img" />
                    </div>
                    
                    </nav>  
                    <nav className={activeMenu2} >
                    <Link to="/" className="list-style">home</Link>
                    <Link to="/" className="list-style">about</Link>
                    <Link to="/" className="list-style">services</Link>
                    <Link to="/" className="list-style">history</Link>
                    <Link to="/" className="list-style">team</Link>
                    <Link to="/" className="list-style">portfolio</Link>
                    <Link to="/likepage" className="list-style">I like it:  {
                            Object.keys(isLiked).reduce((accObj, id)=>(
                                accObj + isLiked[id]
                            ),0 )
                        }
                          </Link>
                    <Link to="/postlist" className="list-style">blog</Link>
                    <Link to="/" className="list-style">contact</Link>
                    <div className="mereji">
                        <img src="/image/icon_foot_1.png" alt="" className="meregi-img" />
                        <img src="/image/icon_foot_2.png" alt="" className="meregi-img" />
                        <img src="/image/icon_foot_4.png" alt="" className="meregi-img" />
                    </div>
                </nav>  
                <div className={menuBack}></div> 
            </div> 
    )
}

const mapState = (state) => ({
    isLiked:state.productsLike
})
export default connect(
    mapState,
    
)(BurgerMenu)
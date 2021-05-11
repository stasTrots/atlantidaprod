import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import {BlogPost,CategoryPage,LikeProdPage,ReadMorePage} from './PostFolder/BlogPost'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './main.css'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop'




const Main = ({
    scrollToTop,
    openScroll
}) => {
    return (
        <main className="main" >
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        appear={true}                
                        timeout={500}
                        classNames="fade">
                        
                        <Switch>
                            <Route exact path="/"  component={HomePage}/>    
                            <Route exact path="/postlist"  component={BlogPost}/>
                            <Route exact path="/postlist/postpage/:id"  component={ReadMorePage}/>   
                            <Route exact path="/categor/:id"    component={CategoryPage}/>
                            <Route exact path="/likepage"  component={LikeProdPage}/>    
                        </Switch>        
                    </CSSTransition>   
                </TransitionGroup>
            )} />
            <ScrollToTop 
            scrollToTop={scrollToTop}
            openScroll={openScroll}/>
        </main>
    )
}




export default Main
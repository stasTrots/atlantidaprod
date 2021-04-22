import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import {BlogPost,CategoryPage,ReadMorePage} from './PostFolder/BlogPost'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './main.css'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop'



const Main = ({
    openFilter,
    filterState,
    scrollToTop,
    
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
                            <Route path="/" exact component={HomePage}/>    
                            <Route path="/postlist" exact >
                                
                                    <BlogPost
                                    openFilter={openFilter}
                                    filterState={filterState} />
                                
                            
                            </Route>
                            <Route path="/postlist/postpage/:id" exact component={ReadMorePage}/>   
                            <Route path="/categor/:id"   exact  component={CategoryPage}/>
                        </Switch>        
                    </CSSTransition>   
                </TransitionGroup>
            )} />
            <ScrollToTop 
            scrollToTop={scrollToTop}/>
        </main>
    )
}



export default Main
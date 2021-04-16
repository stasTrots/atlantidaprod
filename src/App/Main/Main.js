import React from 'react'
import { Route, Switch} from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import BlogPost from './PostFolder/BlogPost'
import ReadMorePage from '../Component/ReadMore/ReadMorePage'

const Main = ({
    openFilter,
    filterState
}) => {
    return (
        <main className="main">
            <Switch>
                <Route path="/" exact component={HomePage} />
                
                <Route path="/postlist" exact 
                        render={() => <BlogPost
                        openFilter={openFilter}
                        filterState={filterState} /> }/>
                <Route path="/postlist/postpage" exact render={() => <ReadMorePage
                        openFilter={openFilter}
                        filterState={filterState} /> } />        
                            
                            
            </Switch>
        </main>
    )
}

export default Main
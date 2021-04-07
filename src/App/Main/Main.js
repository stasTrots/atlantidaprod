import React from 'react'
import FilterMobile from './Filter/FilterMobile'
import Filter from './Filter/Filter'
import PostList from './Posts/PostList'


const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <FilterMobile />
                    </div>
                    <div className="col-xs-8 col-sm-12">
                        <PostList />
                    </div>
                    <div className="col-xs-4 filter-list mobile-menu-none">
                        <Filter />
                    </div>
                    
                    
                </div>
            </div>
        </main>
    )
}

export default Main
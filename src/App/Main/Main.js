import React from 'react'
import FilterMobile from './Filter/FilterMobile'
import Filter from './Filter/Filter'
import PostList from './Posts/PostList'


const Main = ({
    openFilter,
    filterState
}) => {
    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <FilterMobile 
                        openFilter={openFilter}
                        filterState={filterState}/>
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
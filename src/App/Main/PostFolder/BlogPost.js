import React from 'react'
import FilterMobile from './Filter/FilterMobile'
import Filter from './Filter/Filter'
import PostList from './Posts/PostList'
import PostPage from './ReadMore/ReadMore'


const BlogPost = ({
    openFilter,
    filterState
}) => {
    return (
        <div className="container">
                <div className="row">
                        <FilterMobile 
                        openFilter={openFilter}
                        filterState={filterState}/>
                    <div className="col-xs-8 col-sm-12">
                        <PostList /> 
                    </div>
                        <Filter />
                </div>
        </div>
    )
}

const ReadMorePage = ({
    openFilter,
    filterState
}) => {
    return (
        <div className="container">
                <div className="row">
                        <FilterMobile 
                        openFilter={openFilter}
                        filterState={filterState}/>
                    <div className="col-xs-8 col-sm-12">
                        <PostPage /> 
                    </div>
                        <Filter />
                </div>
        </div>
    )
}

export  {ReadMorePage, BlogPost}
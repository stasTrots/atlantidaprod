import React from 'react'
import FilterMobile from './Filter/FilterMobile'
import Filter from './Filter/Filter'
import PostList from './Posts/PostList'
import PostPage from './ReadMore/ReadMore'
import CategoryPageList from './CategoryPage/CategoryPageList'
import LikePage from './LikePage/LikePage'



const BlogPost = () => {
    return (
        <div className="container">
                <div className="row">
                        <FilterMobile/>
                    <div className="col-xs-8 col-sm-12">
                        <PostList /> 
                    </div>
                        <Filter />
                </div>
        </div>
    )
}

const ReadMorePage = ({
    match
}) => {
   
    return (
        <div className="container">
                <div className="row">
                        <FilterMobile/>
                    <div className="col-xs-8 col-sm-12">
                        <PostPage 
                        match={match}/> 
                    </div>
                        <Filter />
                </div>
        </div>
    )
}

const CategoryPage = ({
    match
}) => {
    
    return (
        <div className="container">
                <div className="row">
                        <FilterMobile/>
                    <div className="col-xs-8 col-sm-12">
                        <CategoryPageList 
                        match={match}
                        />
                    </div>
                        <Filter />
                </div>
        </div>
    )
}
const LikeProdPage = () => {

    return (
        <div className="container">
                <div className="row">
                        <FilterMobile/>
                    <div className="col-xs-8 col-sm-12">
                        <LikePage/> 
                    </div>
                        <Filter />
                </div>
        </div>
    )
}
export  {ReadMorePage, BlogPost, CategoryPage, LikeProdPage}
import React from 'react'
import './postPage.css'
import PostPagesItem from '../../../../Components/PostPages/PostPagesItem'


const PostPage = ({match}) => {
    return (
        <div>
            <PostPagesItem
            match={match}/>
        </div>
    )
}

export default PostPage
import React from 'react'
import posts, {getPostMore} from '../Posts/Post'
import PostListItem from '../Posts/PostListItem'
import { connect } from 'react-redux'


const LikePage = ({
   isLiked,
   postId = getPostMore(posts),
   id
}) => {
    const listOfLikePosts = Object.keys(isLiked).map(likeId => (
        postId[likeId]
     ))
    return (
        <>
            <div >
                    <h1 className={"categories-page-name"}>I Like It: {
                            Object.keys(isLiked).reduce((accObj, id)=>(
                                accObj + isLiked[id]
                            ),0 )
                        }</h1>
                        {
                            listOfLikePosts.map(({
                                id,
                                title,
                                images,
                                author,
                                data,
                                komments,
                                search,
                                categor,
                                textAbout,
                                
                            }) => (
                                <div className="blog-list" id="blog-list" key={id}>
                                    <PostListItem
                                    id={id}
                                    title={title}
                                    images={images}
                                    author={author}
                                    data={data}
                                    komments={komments}
                                    search={search}
                                    categor={categor}
                                    textAbout={textAbout}
                                    />
                                </div>
                            ))
                        }
                    
                   
            </div>
        </>
    )
}

const mapState = (state) => ({
    isLiked:state.productsLike
})
const mapDispatch = (dispatch,{id}) => ({
   
    removeLike: () => dispatch({
        type:"DISLIKE",
        id
    }),
})
export default connect(
    mapState,
    mapDispatch
)(LikePage)
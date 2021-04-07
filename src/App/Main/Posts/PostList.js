import React from 'react'
import PostListItem from './PostListItem'
import posts from './Post'

const PostList = () => {
    return (
        <>
            <div >
                    
                        {
                            posts.map(({
                                id,
                                title,
                                images,
                                author,
                                data,
                                komments,
                                search,
                                categor,
                                textAbout
                            }) => (
                                <div className="blog-list" id="blog-list" key={id}>
                                    <PostListItem
                                  
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
                    
                    <div className="pages">
                        <button className="pages-btn">1</button>
                        <button className="pages-btn">2</button>
                        <button className="pages-btn">3</button>
                        <button className="pages-btn">...</button>
                    </div>
            </div>
        </>
    )
}

export default PostList
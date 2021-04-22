import React from 'react'
import posts from '../Posts/Post'
import PostListItem from '../Posts/PostListItem'



const CategoryPageList = ({
    match,
}) => {
    
    return (
        <>
            <div >
                    <h1 className={"categories-page-name"}>{match.params.id}</h1>
                        {
                            posts.filter(categories => (categories.categor === match.params.id || categories.data === match.params.id) ).map(({
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

export default CategoryPageList
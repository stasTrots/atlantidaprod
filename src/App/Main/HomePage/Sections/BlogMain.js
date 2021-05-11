import React, { useEffect } from 'react'
import Aos from 'aos'
import {Link } from 'react-router-dom'
import posts from '../../PostFolder/Posts/Post'

const BlogMain = () => {
    useEffect (() => {
        Aos.init({
            duration:2500,
            easing:"esse-in-cubic",
            anchorPlacement:'top-bottom'
        })
    })
    return (
        <section className="blog-main" data-aos="fade">
        <div className="container container-blog">
            <div className="row row-history">
                <div className="col-xs-12">
                    <div className="section-header">
                        <div className="section-title section-title-white">
                            <h2>blog</h2>
                        </div>
                        <p>Donec aliquet, ipsum ut lobortis facilisis, nisi ligula aliquam odio, ut vehicula odio lorem in erat. Quisque quam ipsum, commodo non condimentum a, fermentum id sapien. Pellentesque sit amet sem neque. </p>
                    </div>
                </div> 
                <div className="col-xs-12">
                    <div className="blog-main-list blog-main-none">
                        <div className="col-xs-6 col-sm-12">
                        {
                            posts.slice(0,2).map(({
                                id,
                                title,
                                images,
                                textLat,
                                author,
                                data,
                            }) => (
                                <div className="blog-main-item" key={id}>
                                    <div className="blog-main-item-img">
                                        <img src={images} alt=""/>
                                    </div>
                                    <div className="blog-main-item-text">
                                        <i>{data} / By {author}</i>
                                        <h3>{title}</h3>
                                        <p>{textLat}</p>
                                    </div>
                                    <div className="blog-main-bg">
                                    <Link to={`/postlist/postpage/${id}`} >Read More</Link>
                                    </div>
                                </div>
                            ))
                        }
                        </div>    
                        <div className="col-xs-6 col-sm-12">
                        {
                            posts.slice(2,4).map(({
                                id,
                                title,
                                images,
                                textLat,
                                author,
                                data,
                            }) => (
                                <div className="blog-main-item" key={id}>
                                    <div className="blog-main-item-img">
                                        <img src={images} alt=""/>
                                    </div>
                                    <div className="blog-main-item-text">
                                        <i>{data} / By {author}</i>
                                        <h3>{title}</h3>
                                        <p>{textLat}</p>
                                    </div>
                                    <div className="blog-main-bg">
                                    <Link to={`/postlist/postpage/${id}`} >Read More</Link>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    <div className="mobile-btn-blog">
                        <Link to="/postlist" ><button>See More</button></Link>
                    </div>
                </div>   
            </div>
        </div>
        
    </section>
    )
}

export default BlogMain
import React, { Component } from 'react'
import './post.css'
import { Link } from 'react-router-dom'


class PostListItem extends Component {
    render () {

        const {
            
            title,
            images,
            author,
            data,
            komments,
            search,
            categor,
            textAbout
        } = this.props
        return (
            <div className="blog-item">
                <div className="item-img">
                    <img src={images} alt="" />
                </div>
                <div className="item-name">
                    <h3><a href="/">{title}</a></h3>
                    <i>By {author} / {data}</i>
                </div>
                <div className="item-set">
                    <div className="comm">
                        <img src="image/kom.png" alt="" className="item-set-img" />
                        <p className="item-set-text">{komments}</p>
                    </div>
                    <div className="search">
                        <img src="image/search.png" alt="" className="item-set-img" />
                        <p className="item-set-text">{search}</p>
                    </div>
                    <div className="categ">
                        <img src="image/categ.png" alt="" className="item-set-img" />
                        <a href="/" className="item-set-text item-set-text-categor">{categor}</a>
                    </div>
                </div>
                <div className="item-text">
                    <p>{textAbout}</p>
                </div>
                <Link to="/postlist/postpage"><button className="item-btn">Read More</button></Link>
                </div>
        )
    }
}

export default PostListItem
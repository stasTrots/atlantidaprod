import React, { Component } from 'react'
import './post.css'


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
                    <h3>{title}</h3>
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
                        <p className="item-set-text">{categor}</p>
                    </div>
                </div>
                <div className="item-text">
                    <p>{textAbout}</p>
                </div>
                <button className="item-btn">Read More</button>
                </div>
        )
    }
}

export default PostListItem
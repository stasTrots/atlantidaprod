import React from 'react'
import './filter.css'

const Filter = () => {
    return (
        <div >
                    <div className="filter-search" >
                        <img src="image/lupa.png" alt="" />
                        <input type="text" placeholder="Search" />
                        
                    </div>
                    <div className="filter-latest-post">
                        
                        <h2 className="filter-title">latest posts</h2>
                        
                        <div className="lat-post">
                            <div className="lat-post-img">
                                <img src="image/latest/lat1.png" alt="" />
                            </div>
                            <div className="lat-post-text">
                                <h3>sit amet pretium odio magna ege</h3>
                                <p>Nullam lobortis, turpis lobortis placerat vehicula, ipsum</p>
                            </div>
                        </div>
                        <div className="lat-post">
                            <div className="lat-post-img">
                                <img src="image/latest/lat2.png" alt="" />
                            </div>
                            <div className="lat-post-text">
                                <h3>sit amet pretium odio magna ege</h3>
                                <p>Nullam lobortis, turpis lobortis placerat vehicula, ipsum</p>
                            </div>
                        </div>
                        <div className="lat-post">
                            <div className="lat-post-img">
                                <img src="image/latest/lat3.png" alt="" />
                            </div>
                            <div className="lat-post-text">
                                <h3>sit amet pretium odio magna ege</h3>
                                <p>Nullam lobortis, turpis lobortis placerat vehicula, ipsum</p>
                            </div>
                        </div>
                        <div className="lat-post">
                            <div className="lat-post-img">
                                <img src="image/latest/lat4.png" alt="" />
                            </div>
                            <div className="lat-post-text">
                                <h3>sit amet pretium odio magna ege</h3>
                                <p>Nullam lobortis, turpis lobortis placerat vehicula, ipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className="filter-categories">
                        <h2 className="filter-title">categories</h2>
                        <ul className="categories">
                            <li><a href="/" className="list-cat">Photography</a></li>
                            <li><a href="/" className="list-cat">Website Design</a></li>
                            <li><a href="/" className="list-cat">Branding</a></li>
                            <li><a href="/" className="list-cat">Flyers</a></li>
                            <li><a href="/" className="list-cat">Uncategories</a></li>
                            <li><a href="/" className="list-cat">Category 22</a></li>
                        </ul>
                    </div>
                    <div className="filter-archives">
                        <h2 className="filter-title">archives</h2>
                        <ul className="archives">
                            <li><a href="/" className="list-cat">January 2020</a></li>
                            <li><a href="/" className="list-cat">December 2020</a></li>
                            <li><a href="/" className="list-cat">November 2020</a></li>
                            <li><a href="/" className="list-cat">October 2020</a></li>
                            <li><a href="/" className="list-cat">September 2020</a></li>
                        </ul>
                    </div>
                    <div className="filter-flickr">
                        <h2 className="filter-title">flickr photos</h2>
                        <div className="flickr-img">
                            <img src="image/flicker/1.png" alt="" />
                            <img src="image/flicker/2.png" alt="" />
                            <img src="image/flicker/3.png" alt="" />
                            <img src="image/flicker/4.png" alt="" />
                            <img src="image/flicker/5.png" alt="" />
                            <img src="image/flicker/6.png" alt="" />
                        </div>
                        
                    </div>
                </div>
    )
}

export default Filter
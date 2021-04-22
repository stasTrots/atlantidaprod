import React from 'react'
import './filter.css'
import { Link } from 'react-router-dom'
import {categories, archivesObj} from './FilterObj'
import posts from '../Posts/Post'

const Filter = () => {
    

    return (
        <div className="col-xs-4 filter-list mobile-menu-none">
                    <div className="filter-search" >
                        <img src="/image/lupa.png" alt="" />
                        <input type="text" placeholder="Search" />
                        
                    </div>
                    <div className="filter-latest-post">
                        
                        <h2 className="filter-title">latest posts</h2>
                        
                        {
                            posts.slice(0,4).map(({
                                id,
                                title,
                                images,
                                textLat
                            }) => (
                                <div className="lat-post" key={id}>
                                    <div className="lat-post-img">
                                        <img src={images} alt="" />
                                    </div>
                                    <div className="lat-post-text">
                                        <h3><Link to={`/postlist/postpage/${id}`}>{title}</Link></h3>
                                        <p>{textLat}</p>
                                    </div>
                                </div>
                            ))
                        }
                        
                        
                    </div>
                    <div className="filter-categories">
                        <h2 className="filter-title">categories</h2>
                        <ul className="categories">
                            {
                                categories.map(({
                                    idCateg,
                                    categorName    
                                }) => (
                                    
                                        <li key={idCateg}><Link to={`/categor/${categorName}`} className="list-cat">{categorName}</Link></li>
                                        
                                    
                                ))
                            }

                            
                        </ul>
                    </div>
                    <div className="filter-archives">
                        <h2 className="filter-title">archives</h2>
                        <ul className="archives">
                        {
                            archivesObj.map(({
                                idArch,
                                archName
                            }) => (
                                <li key={idArch}><Link to={`/categor/${archName}`} className="list-cat">{archName}</Link></li>
                            ))
                        }
                        </ul>
                    </div>
                    <div className="filter-flickr">
                        <h2 className="filter-title">flickr photos</h2>
                        <div className="flickr-img">
                            <img src="/image/flicker/1.png" alt="" />
                            <img src="/image/flicker/2.png" alt="" />
                            <img src="/image/flicker/3.png" alt="" />
                            <img src="/image/flicker/4.png" alt="" />
                            <img src="/image/flicker/5.png" alt="" />
                            <img src="/image/flicker/6.png" alt="" />
                        </div>
                        
                    </div>
                </div>
    )
}

export default Filter
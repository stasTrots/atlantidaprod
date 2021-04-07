import React from 'react'
import './filter.css'


const FilterMobile = () => {
    return (
        <div >
                    <div className="filter-mobile display-none">
                        <div className="filter-search" >
                            <img src="image/lupa.png" alt="" />
                            <input type="text" placeholder="Search" />
                            
                        </div>
                        <div className="filter-btn">
                            <button className="filter-menu">Filter</button>
                        </div>
                        <div className="filter-menu-mobile">
                            <ul>
                                <li className="ctg-ctg">categories +
                                    <ul className="categories">
                                    <li><a href="/" className="list-cat">Photography</a></li>
                                    <li><a href="/" className="list-cat">Website Design</a></li>
                                    <li><a href="/" className="list-cat">Branding</a></li>
                                    <li><a href="/" className="list-cat">Flyers</a></li>
                                    <li><a href="/" className="list-cat">Uncategories</a></li>
                                    <li><a href="/" className="list-cat">Category 22</a></li>
                                </ul></li>
                                <li className="ctg-rch">acrchives +
                                    <ul className="archives">
                                        <li><a href="/" className="list-cat">January 2020</a></li>
                                        <li><a href="/" className="list-cat">December 2020</a></li>
                                        <li><a href="/" className="list-cat">November 2020</a></li>
                                        <li><a href="/" className="list-cat">October 2020</a></li>
                                        <li><a href="/" className="list-cat">September 2020</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
    )
}

export default FilterMobile
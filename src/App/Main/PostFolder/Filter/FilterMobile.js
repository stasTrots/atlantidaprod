import React, { Component } from 'react'
import './filter.css'
import {Categories, Archives} from './FilterIn'



class FilterMobile extends Component {
    state = {
        categoriesOpen:false,
        archOpen:false,
        
    }
    
    openCategories = () => {
        this.setState((pervState) => ({
            categoriesOpen:!pervState.categoriesOpen
        }))
    }
    openArch = () => {
        this.setState((pervState) => ({
            archOpen:!pervState.archOpen
        }))
    }
    
    render() {
        const {
            openFilter,
            filterState
        } = this.props
        let activeFilterMenu = "filter-menu-mobile"
        
        if(filterState) {
        activeFilterMenu = "filter-menu-mobile active-filter-mobile"
        }
        
        return (
            <div className="col-sm-12 display-none filter-mobile">
                        <div className="filter-mobile display-none">
                            <div className="filter-search" >
                                <img src="/image/lupa.png" alt="" />
                                <input type="text" placeholder="Search" />
                                
                            </div>
                            <div className="filter-btn">
                                <button className="filter-menu" onClick={openFilter}>Filter</button>
                            </div>
                            <div className={activeFilterMenu}>
                                <ul>
                                    <Categories 
                                    openCategories={this.openCategories}
                                    categorOpen={this.state.categoriesOpen}/>
                                    <Archives 
                                    archOpen={this.state.archOpen}
                                    openArch={this.openArch}/>
                                </ul>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default FilterMobile
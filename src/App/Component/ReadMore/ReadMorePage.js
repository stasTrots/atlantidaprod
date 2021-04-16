import React from 'react'
import FilterMobile from '../../Main/PostFolder/Filter/FilterMobile'
import Filter from '../../Main/PostFolder/Filter/Filter'
import ReadMore from './ReadMore'



const ReadMorePage = ({
    openFilter,
    filterState
}) => {
    return (
        <div className="container">
                <div className="row">
                        <FilterMobile 
                        openFilter={openFilter}
                        filterState={filterState}/>
                    <div className="col-xs-8 col-sm-12">
                        <ReadMore /> 
                    </div>
                        <Filter />
                </div>
        </div>
    )
}

export default ReadMorePage
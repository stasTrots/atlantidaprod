import React from 'react'
import { connect } from 'react-redux'

const CloseBtn = ({
    show,
    close,
    isOpen,
    closeFilMenu
}) => {
    let activeMenuBtn = "close-btn display-none"
    if(show || isOpen) {
        activeMenuBtn = "close-btn display-none close-btn-active"
    }
    
    return (
        <div className={activeMenuBtn} onClick={() => (show) ? close()  : closeFilMenu()}>
            <div>
                <span />
                <span />
            </div>
        </div>
    )
}

const mapState = (state) => ({
    isOpen:state.filterState.filterMenuOpen
})
const mapDispatch = (dispatch) => ({
    closeFilMenu: () => dispatch({
        type:"NOFILTER"
    }),
})
export default connect(
    mapState,
    mapDispatch
)(CloseBtn)
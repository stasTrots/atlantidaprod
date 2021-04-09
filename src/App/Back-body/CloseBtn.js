import React from 'react'

const CloseBtn = ({
    show,
    close,
    filterState
}) => {
    let activeMenuBtn = "close-btn display-none"
    if(show || filterState) {
        activeMenuBtn = "close-btn display-none close-btn-active"
    }
    
    return (
        <div className={activeMenuBtn} onClick={close}>
            <div>
                <span />
                <span />
            </div>
        </div>
    )
}
export default CloseBtn
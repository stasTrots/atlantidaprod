import React from 'react'
import './ScrollToTop.css'

const ScrollToTop = ({
    scrollToTop,
    openScroll
}) => {
    let scrollShow = 'scroll-to-top'
    if (openScroll) {
        scrollShow = 'scroll-to-top scroll-show'
    }
    return (
        <div className={scrollShow} onClick={scrollToTop}>
            <span/>
        </div>
    )
}

export default ScrollToTop
import React from 'react'
import './ScrollToTop.css'

const ScrollToTop = ({
    scrollToTop,
    
}) => {
    
    return (
        <div className="scroll-to-top" onClick={scrollToTop}>
            <span/>
        </div>
    )
}

export default ScrollToTop
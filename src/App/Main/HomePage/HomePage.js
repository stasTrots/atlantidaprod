import React from 'react'
import './homePage.css'
import AboutUs from './Sections/AboutUs'
import BlogMain from './Sections/BlogMain'
import Clients from './Sections/Clients'
import OutTeam from './Sections/OutTeam'
import Prices from './Sections/Prices'
import Servis from './Sections/Servis'
import History from './Sections/History'
import Rtl from '../../../Components/Slider/SliderFoot'

import "aos/dist/aos.css"

const HomePage = () => {
    
    return (
        <>
            <AboutUs />
            <Servis />
            <History />
            <OutTeam />
            <BlogMain />
            <Prices />
            <Clients />
            <Rtl />
        </>
    )
}

export default HomePage
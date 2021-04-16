import React from 'react'
import './homePage.css'
import AboutUs from './Sections/AboutUs'
import BlogMain from './Sections/BlogMain'
import Clients from './Sections/Clients'
import OurTeam from './Sections/OutTeam'
import Prices from './Sections/Prices'
import Servis from './Sections/Servis'
import History from './Sections/History'
const HomePage = () => {
    return (
        <>
            <AboutUs/>
            <Servis/>
            <History/>
            <OurTeam/>
            <BlogMain/>
            <Prices/>
            <Clients/>
        </>
    )
}

export default HomePage
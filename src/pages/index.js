import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <React.Fragment>
            <SideBar isOpen={isOpen} toggle = {toggle}/>
            <NavBar toggle = {toggle}/>
            <HeroSection />
        </React.Fragment>
    )
}

export default Home

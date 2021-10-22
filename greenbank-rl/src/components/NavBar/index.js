import React, { useEffect, useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks , NavBtn, NavBtnLink} from './NavBarElements'
import { IconContext } from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'

const NavBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav =()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true) 
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <React.Fragment>
            <IconContext.Provider value = {{color : 'red'}}>
            <Nav scrollNav = {scrollNav}>
            <NavBarContainer>

                <NavLogo to= '/' onClick= {toggleHome}> Green Bank</NavLogo>

                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>

                    <NavItem>
                        <NavLinks to= 'about' smooth = {true} duration= {500} spy= {true} exact= 'true' >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'discover' smooth = {true} duration= {500} spy= {true} exact= 'true'>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'services' smooth = {true} duration= {500} spy= {true} exact= 'true'>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'signup' smooth = {true} duration= {500} spy= {true} exact= 'true'>Sign Up</NavLinks>
                    </NavItem>

                </NavMenu>

                <NavBtn>
                    <NavBtnLink to= '/signin'> Sign In</NavBtnLink>
                </NavBtn>

            </NavBarContainer>
            </Nav>
            </IconContext.Provider>
        </React.Fragment>
        
    )
}


export default NavBar;
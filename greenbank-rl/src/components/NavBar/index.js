import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks , NavBtn, NavBtnLink} from './NavBarElements'


export const NavBar = () => {
    return (
        <React.Fragment>
            <Nav>
            <NavBarContainer>

                <NavLogo to= '/'> Green Bank</NavLogo>

                <MobileIcon>
                    <FaBars />
                </MobileIcon>

                <NavMenu>

                    <NavItem>
                        <NavLinks to= 'about'>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'discover'>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'services'>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= 'signup'>Sign Up</NavLinks>
                    </NavItem>

                </NavMenu>

                <NavBtn>
                    <NavBtnLink to= '/signin'> Sign In</NavBtnLink>
                </NavBtn>

            </NavBarContainer>
            </Nav>
        </React.Fragment>
        
    )
}


export default NavBar;
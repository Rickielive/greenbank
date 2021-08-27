import React from 'react'
import 'animate.css';
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute} from './SideBarElements'


const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink className="animate__animated animate__fadeInRight" 
                    to="about" onClick={toggle}>About</SideBarLink>
                    <SideBarLink className="animate__animated animate__fadeInRight"
                    to="discover" onClick={toggle}>Discover</SideBarLink>
                    <SideBarLink className="animate__animated animate__fadeInRight" 
                    to="services" onClick={toggle}>Services</SideBarLink>
                    <SideBarLink className="animate__animated animate__fadeInRight" 
                    to="signup" onClick={toggle}>Sign Up</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to= '/signin'> Sign In</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar

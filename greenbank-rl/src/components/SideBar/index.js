import React from 'react'
import 'animate.css';
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute} from './SideBarElements'


const SideBar = () => {
    return (
        <SideBarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink className="animate__animated animate__fadeInRight" to="about">About</SideBarLink>
                    <SideBarLink className="animate__animated animate__fadeInRight" to="discover">Discover</SideBarLink>
                    <SideBarLink className="animate__animated animate__fadeInRight" to="services">Services</SideBarLink>
                    <SideBarLink className="animate__animated animate__fadeInRight" to="signup">Sign Up</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to= '/signin'> Sign In</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar

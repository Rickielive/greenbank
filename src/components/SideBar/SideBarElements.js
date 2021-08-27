import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {FaTimes} from 'react-icons/fa'


export const SideBarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top:0;
left:0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
color:#fff;
position: fixed;
top: 5%;
right: 4%;
padding: .75rem;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const Icon = styled.div`
position: absolute;
/* top: 1.2 rem;
right: 1.5rem; */
background: transparent;
outline: none;
`

export const SideBarWrapper = styled.div`
color: #fff;
/* position: fixed;
top: 0;
right:0;
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; */

`
export const SideBarMenu = styled.ul`

display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;
align-items: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 80px);
}
`

export const SideBarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-family: Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif," "Bitstream Vera Serif", "Liberation Serif", Georgia, serif;
font-size: clamp(2rem, 3vw, 5vw);
/* font-size: 16px; */
text-decoration: nones;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;

&:hover{
    color:#01bf71;
    transition: 0.2s ease-in-out;
}
`

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const SideBarRoute = styled(LinkR)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 16px 64px;
color: #010606;
font-size: clamp(1.5rem, 2vw, 4vw);
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
     }
`
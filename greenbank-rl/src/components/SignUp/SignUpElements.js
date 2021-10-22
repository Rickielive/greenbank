import styled from 'styled-components'

export const SignupScreenContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 620px;
position: relative;
z-index: 1;

/* add : before styles */

:before {
    content: '';
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: linear-gradient(
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.0) 70%,
      /* These three 'smooth' out the fade. */
      rgba(0, 0, 0, 0.2) 80%,
      rgba(0, 0, 0, 0.7) 90%,
      rgba(0, 0, 0, 0.9) 95%,
      /* Solid to match the background. */
      rgba(0, 0, 0, 1.0) 100%
    );
    /* background: linear-gradient(
        180deg, rgba(0,0,0,0.2) 0% , 
        rgba(0,0,0,0.6) 100%),
        linear-gradient (180deg, rgba(0,0,0,0.2) 0%,
        transparent 100%); */
    z-index: 2;
};
`

export const SignupScreen = styled.div`
display: center; 
max-width: 300px; 
padding: 40px;
margin-top: 160px;
/* margin: auto; */
margin-left: auto;
margin-right: auto;
background: #01bf71;
    /* float: none !important;
    right: 20px; */
border-radius: 15px;
`

export const SignupScreenForm  = styled.form`
 display: grid;
flex-direction: column;
`

export const SignupScreen__gray = styled.span`
color: gray;
`


export const SignupScreen__link = styled.span`
cursor: pointer;
text-decoration: underline;

`
export const SignupScreenFormInput = styled.input`
padding: 5px 15px;
height:40px;
outline-width: 0;
border: none;
margin-bottom: 14px;
border-radius: 5px;
    /* max-width: 600px; */
`

export const SignupScreenFormH1 = styled.h1`
text-align: left;
margin-bottom: 10px;
`

export const SignupScreenFormButton = styled.button`
padding: 12px 16px;
font-size: 1rem;
color: #fff;
background-color: #010606;
font-weight:800;
border: none;
cursor:pointer;
border-radius: 5px;
`

export const SignupScreenFormH4 = styled.h4`
text-align: left;
margin-top: 30px;
`







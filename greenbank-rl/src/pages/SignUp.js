import React from 'react'
import SignUp from '../components/SignIn'
import ScrollToTop from '../components/ScrollToTop';


const signUpPage = () => {
    return (
        <React.Fragment>
            <ScrollToTop />
            <SignUp />
        </React.Fragment>
    )
}

export default signUpPage

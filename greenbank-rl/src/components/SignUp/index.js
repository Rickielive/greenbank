import React from 'react'
import { SignupScreen, SignupScreenContainer, SignupScreenForm, SignupScreenFormButton, SignupScreenFormH1, SignupScreenFormH4, SignupScreenFormInput, SignupScreen__gray, SignupScreen__link} from './ProfileSectionElements'
//import Image from '../../images/tree.jpg'
import Video from '../../videos/video.mp4'
import NavBar from '../NavBar'



function ProfileSection() {
    

    return (
        
            <SignupScreen>
           <SignupScreenForm>
               <SignupScreenFormH1>
               <h1> Sign In</h1>
               </SignupScreenFormH1>
               
                {/* ref= {emailRef} */}
                <input  type="Email" placeholder="Email Address" />
                {/* ref= {passwordRef} */}
                <input  placeholder= "Password" type = "password"/>
                {/* onClick={signIn} */}
                <SignupScreenFormButton>
                <button type="submit" > Sign In </button>
                </SignupScreenFormButton>
                 
                <SignupScreenFormH4>
                    <h4>
                 <span>New to Greenbank?</span>
                 {/* onClick={register} */}
                     <span > Sign up now </span>
                 </h4>
                </SignupScreenFormH4>
                    
                 
                
             
           </SignupScreenForm>
           

        </SignupScreen>

       
        





        // <ProfileContainer>
        //     <NavBar />
            
        //     <ProfileBG>
        //         <ProfileH1>Edit profile</ProfileH1>
        //     <ProfileBGInfo>
        //         <VideoBG autoPlay loop muted src={Video} type='video/mp4'/>
        //         <ProfileDetails>
        //         <ProfileH1>Email</ProfileH1>  
        //         </ProfileDetails>
        //     </ProfileBGInfo>
            
        //     </ProfileBG>

        //     <ProfileContent>
        //             <ProfileH1>Edit profile</ProfileH1>
        //         </ProfileContent> 
        // </ProfileContainer>
            
    )
}

export default ProfileSection
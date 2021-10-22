import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SignInElements'

export const SignIn = () => {
    return (
        <React.Fragment>
            <Container>
                <FormWrap>
                    <Icon to = '/'> Green Bank</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your Account</FormH1>
                            <FormLabel htmlFor= 'for'> Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'> Password</FormLabel>
                            <FormInput type= 'password' required/>
                            <FormButton type= 'submit'> Continue</FormButton>
                            <Text> Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </React.Fragment>
    )
}


export default SignIn;
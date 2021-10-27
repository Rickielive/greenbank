import React from 'react'
import { FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItems, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, } from './FooterElements'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'


const Footer  = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                       <FooterLinksItems> 
                           <FooterLinkTitle> About us </FooterLinkTitle>
                               <FooterLink to = "/"> Disclosures</FooterLink>
                               <FooterLink to = "/"> Accessibity</FooterLink>
                               <FooterLink to = "/"> Online Privacy</FooterLink>
                               <FooterLink to = "/"> Online Security</FooterLink>
                               <FooterLink to = "/"> Terms of Use</FooterLink>
                               <FooterLink to = "/SignUp"> Site Map</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems> 
                           <FooterLinkTitle> Contact us </FooterLinkTitle>
                           <FooterLink to = "/"> Green Bank Limited,</FooterLink>
                           <FooterLink to = "/"> Fosse House,</FooterLink>
                           <FooterLink to = "/"> Moi Avenue Street,</FooterLink>
                           <FooterLink to = "/"> Nairobi</FooterLink>
                           <FooterLink to = "/"> T:(+254) 7123456</FooterLink>
                           <FooterLink to = "/"> E:enquiries@greenbank.org</FooterLink>
                        </FooterLinksItems> 
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                       <FooterLinksItems> 
                           <FooterLinkTitle> Accounts</FooterLinkTitle>
                           <FooterLink to = "/"> Checking </FooterLink>
                           <FooterLink to = "/"> Savings </FooterLink>
                           <FooterLink to = "/"> Investment</FooterLink>
                           <FooterLink to = "/"> Credit Cards</FooterLink>
                           <FooterLink to = "/"> Mortgages</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems> 
                           <FooterLinkTitle> Business</FooterLinkTitle>
                               <FooterLink to = "/"> Business Checking</FooterLink>
                               <FooterLink to = "/"> CDs and Savings</FooterLink>
                               <FooterLink to = "/"> Treasury Management</FooterLink>
                               <FooterLink to = "/"> Business Lending</FooterLink>
                        </FooterLinksItems> 
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick = {toggleHome}>
                            Green Bank
                        </SocialLogo>
                        <WebsiteRights>  © {new Date().getFullYear()} Green Bank.N.A. All Rights Reserved. Wachira M.</WebsiteRights>
                        <SocialIcons>

                            <SocialIconLink href= "/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href= "/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href= "/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href= "/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

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
                               <FooterLink to = "/signin"> How it works</FooterLink>
                               <FooterLink to = "/signin"> Testimonials</FooterLink>
                               <FooterLink to = "/signin"> Careers</FooterLink>
                               <FooterLink to = "/signin"> Investors</FooterLink>
                               <FooterLink to = "/signin"> Terms of Service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems> 
                           <FooterLinkTitle> Contact us </FooterLinkTitle>
                           <FooterLink to = "/"> Contact</FooterLink>
                           <FooterLink to = "/"> Support</FooterLink>
                           <FooterLink to = "/"> Destination</FooterLink>
                           <FooterLink to = "/"> SponsorShips</FooterLink>
                        </FooterLinksItems> 
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                       <FooterLinksItems> 
                           <FooterLinkTitle> Videos</FooterLinkTitle>
                           <FooterLink to = "/"> Submit Videos </FooterLink>
                           <FooterLink to = "/"> Ambassadors </FooterLink>
                           <FooterLink to = "/"> Agency</FooterLink>
                           <FooterLink to = "/"> Influencer</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems> 
                           <FooterLinkTitle> Social Media </FooterLinkTitle>
                               <FooterLink to = "/"> Instagram</FooterLink>
                               <FooterLink to = "/"> Facebook</FooterLink>
                               <FooterLink to = "/"> Youtube</FooterLink>
                               <FooterLink to = "/"> Twitter</FooterLink>
                        </FooterLinksItems> 
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick = {toggleHome}>
                            Greenbank
                        </SocialLogo>
                        <WebsiteRights> Greenbank {new Date().getFullYear()} All rights reserved.</WebsiteRights>
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
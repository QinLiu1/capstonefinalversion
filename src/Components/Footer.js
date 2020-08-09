import React from'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import styled from 'styled-components';
import CenterContainer from './CenterContainer';




const Disclaimer = styled.p`

    font-size: 10px;
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;

`


const Footer = () => {
 
    return(
        <React.Fragment>
            <BottomNavigation >        
                <BottomNavigationAction label="Resort Directory" showLabel = {true} href="/resortDirectory"/>
                <BottomNavigationAction label="About us" showLabel = {true} href = "/aboutus" />
                <BottomNavigationAction label="Contact us" showLabel = {true} href = "/contact" />
            </BottomNavigation>
            <CenterContainer>
                <Disclaimer>Now featuring traveler reviews from:</Disclaimer>
                <Disclaimer><img src="https://www.tripadvisor.com/img/cdsi/langs/en/tripadvisor_logo_transp_160x40-32772-0.png" alt="Trip Advisor Logo" /></Disclaimer>
                <Disclaimer>
                    Use of this website constitutes acceptance of these <a href="/terms-and-conditions" >
                    Terms &amp; Conditions</a> and <a href="/privacy-notice">Privacy Notice</a>.
                </Disclaimer>
                <Disclaimer>*Destinations and travel times are subject to availability and confirmed on a first
                    come, first served basis. Price includes only accommodations and specifically excludes
                    travel costs and other expenses that may be incurred. Price does not include tax,
                    unless otherwise indicated. Promotional discounts may not apply to all properties.
                    Some resorts may charge a mandatory all-inclusive fee. Offer may not be combined with
                    any other promotion, discount, or coupon. Other restrictions may apply. Offer void
                    where prohibited by law.
                </Disclaimer>
                <Disclaimer>
                    Hawaii TAT Broker ID #TA-023-193-6000-01 
                    <br />
                    Resort Rental, LLC, 6277 Sea Harbor Drive, Orlando, FL 32821 
                    <br />
                    ©2020 Resort Rental, LLC. All Rights Reserved.
                </Disclaimer>
            </CenterContainer>
        </React.Fragment>
    )
}

export default Footer;
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PageTitle from '../Components/PageTitle';
import CenterContainer from '../Components/CenterContainer';
import Image from '../Images/Contact_us_image.png';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const StyledImage = styled.img`
    width: 80%;
    padding: 20px;

`


const ContactUs = () =>{
    
    return(
        <React.Fragment>
            <Header />
            <PageTitle>Contact Us</PageTitle>
              <CenterContainer>
                <br></br>
                <Grid  container direction="row">
                    <Grid item xs = {6} >
                        <p>Have a question? Check out our FAQs by <a href="/aboutus">clicking here</a>.
                        </p>
                        <p>For assistance with a reservation please contact us at: stays@indykey.com</p>
                        <p>PH for&nbsp;travellers&nbsp;1.778.800.2950</p>
                    </Grid>
                    <Grid item xs = {6} justify="flex-end"  > 
                        <StyledImage src={Image} />
                    </Grid>
                </Grid>
                <br></br>
               </CenterContainer> 
            <Footer />
        </React.Fragment>
    )
}

export default ContactUs;
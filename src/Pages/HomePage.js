import React from 'react'
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import PageTitle from '../Components/PageTitle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styled from 'styled-components';
import TropicalHut from '../Images/Tropical_Hut.jpg';
import CenterContainer from '../Components/CenterContainer'; 
import RenderImages from '../Components/RenderImages';
import Grid from '@material-ui/core/Grid';
import WhereNext from '../Components/WhereNext';
import Box from '@material-ui/core/Box';
import Calendar from '../Components/Calender';
import {RiCalendarEventLine} from 'react-icons/all';
import Button from '@material-ui/core/Button'
import Popup from "reactjs-popup";
import Hidden from '@material-ui/core/Hidden'
import AutoSearch from '../Components/AutoSearch.js'
import SmAutoSearch from '../Components/SmAutoSearch.js'

const WhereNextContainer = styled.div`
    text-align: center;
    background-color:  #2196f3;
    content-align: center;
    width: 100%;
`

const WhereNextB = styled.h1`
    color: white;
`

const SearchBarContainer = styled(Box)
`
    background-image: url(${TropicalHut});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 15% 0px 15% 0px;
    text-align: center;
    align-content: center
`

const StyledGrid = styled(Grid)
`
    border-radius: 60px;
    background: White;
    padding: 5px;
    text-align: center;
    width: 70%;
    
`



const Homepage = (props) => {
   
    return (
        <React.Fragment>
            <Header />
                <SearchBarContainer display="flex" justifyContent="center" >
                    <div>
                        <h1 style={{color: 'White'}}>Ready. Set. Vacation!</h1>
                        <Hidden only={['xs','sm']}>
                            <StyledGrid container alignItems="center" spacing={2} >
                                <AutoSearch {...props}/>
                            </StyledGrid>


                        </Hidden>
        <Hidden only={['md','lg', 'xl']}>
                            <SmAutoSearch {...props}/>
                        </Hidden>
                    </div>
                </SearchBarContainer>
                <PageTitle>More Destinations</PageTitle>
                <br />
                <CenterContainer>
                    <Grid 
                        container direction='row' 
                        spacing={4}
                        >
                        <RenderImages />
                    </Grid>
                </CenterContainer>
                < WhereNextContainer>
                    <WhereNextB>
                        Where Next?
                    </WhereNextB>
                    <Grid 
                        container direction='row' 
                        spacing={1}
                        >
                        <WhereNext />
                    </Grid>
                </ WhereNextContainer>
                    
                
            <Footer />
        </React.Fragment>
    )
}

export default Homepage;


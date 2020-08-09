import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CenterContainer from '../Components/CenterContainer'
import PageTitle from '../Components/PageTitle'
import BookingHotel from '../Components/BookingHotel'
import BookingPrice from '../Components/BookingPrice'
import Grid from '@material-ui/core/Grid'
import { Redirect } from 'react-router-dom'

const BookingAndHolding = (props) => {
   
    return (
        <React.Fragment>
             {props.location.data === undefined ?
                 <Redirect to="/" /> :
                <React.Fragment>
            <Header></Header>
            <PageTitle>Booking And Holding</PageTitle>
            <CenterContainer>
                <Grid container direction="row">
                    <BookingHotel {...props} />
                    <BookingPrice {...props} />
                </Grid>
            </CenterContainer>
            <Footer></Footer>
            </React.Fragment>
             }
        </React.Fragment>
    )

}

export default BookingAndHolding
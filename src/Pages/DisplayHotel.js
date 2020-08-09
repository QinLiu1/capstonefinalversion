import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CenterContainer from '../Components/CenterContainer'
import PageTitle from '../Components/PageTitle'
import HotelImageBrowser from '../Components/HotelImageBrowser'
import HotelPropertyInformation from '../Components/HotelPropertyInformation'
import HotelOverview from '../Components/HotelOverview'
import { Grid } from '@material-ui/core'
import HotelAvailability from '../Components/HotelAvailability'
import HotelDetailedInformation from '../Components/HotelDetailedInformation'
import HotelLocation from '../Components/HotelLocation'
import HotelFeesAndPolicies from '../Components/HotelFeesAndPolicies'
import HotelReviews from '../Components/HotelReviews'
import Loading from '../Components/Loading'
import { ResortDataAPI } from '../Components/APILinks'


const DisplayHotel = (props) => {
    const [hotelInfo, setHotelInfo] = React.useState({})
    const [loading, isloading] = React.useState(true)
    const resortId = props.match.params.id
    const date = props.location.date

 
    // Get resort data

    React.useEffect(() => {
        (async () => {
            try {
                const requestBody = { "resortId": resortId }


                const response = await fetch(ResortDataAPI,

                {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestBody)
                })
                if(!response.ok) throw Error("Fetch error")
                const body = await response.text()
                setHotelInfo(body)
                isloading(false);
            } catch (e) {
                console.log(e)
            }
        })()
    }, [loading])
    

    let resort;
    if(hotelInfo === "[]") {
        // Hotel could not be found
        resort = <React.Fragment><h1>Could not find hotel with id {resortId}</h1></React.Fragment>
    } else {

        // Hotel was found. Build display components with available data
        let resortObject;
        try { 
            resortObject = JSON.parse(hotelInfo)[0]
        } catch(e) {
            resortObject = { loading: "Loading content." }
        }
        // Build hotel component

        //Image

        //Title
        //Price ???
        //ID, Address, PhoneNumber

        //Overview

        //Availablility

        //Location

        //Resort Information

        //Fees and policies
        
        resort = (
            <React.Fragment>
                {loading ?  
                    <div style={{marginLeft: "43%"}}>
                        <Loading />
                    </div> : 
                <React.Fragment> 
                <Grid container direction="row">
                        <HotelImageBrowser resortId={resortId}/>
                        <HotelPropertyInformation {...resortObject} />
                </Grid>
                <HotelOverview {...resortObject}/>
                <HotelAvailability date = {date} {...resortObject} history = {props.history} />
                <HotelLocation {...resortObject}/>
                <HotelReviews {...resortObject}/>
                <HotelDetailedInformation {...resortObject}/>
                <HotelFeesAndPolicies {...resortObject}/>
                </React.Fragment>
    }

            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Header></Header>
            <PageTitle>Resort Information</PageTitle>
            <CenterContainer>{resort}</CenterContainer>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default DisplayHotel
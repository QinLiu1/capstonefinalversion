import React from 'react'
import Styled from 'styled-components'
import ImageNotFound from '../Images/NoImageFound.jpg'
import Grid from '@material-ui/core/Grid'
import BookingForm from '../Components/BookingForm'
import HoldingForm from '../Components/HoldingForm'
import { array } from 'prop-types'

const StyledDiv = Styled.div
`
    width: 70%;
    @media only screen and (max-width: 1300px) {
        width: 100%
    } 
`

const StyledImg = Styled.img
`
    width: 50%;
    @media only screen and (max-width: 600px) {
        width: 100%
    }
    padding: 20px; 
`

const BookingHotel = (props) => {
    const [hotelImageSrc, setHotelImageSrc] = React.useState()
    const resort = props.location.data
    console.log(resort)
   
    React.useEffect(() => {
        let testImage = new Image()
        testImage.src = `http://www.rci.com/static/Resorts/Assets/${resort.resortId}E01L.jpg`
        testImage.onerror = () => {
            setHotelImageSrc(ImageNotFound)
        }
        testImage.onload = () => {
            setHotelImageSrc(testImage.src)
        }
    }, [])
    console.log(resort.unit.value.unitInfo.roomFacts)

    return (
        <StyledDiv>
            <Grid container direction="row">
                <StyledImg src={hotelImageSrc} />
                <div style={{padding: "20px"}}>
                    <h1>{resort.location == undefined ? " " : resort.location.RESORTNAME}</h1>
                        <p>{resort.location.CITY}, {resort.location.REGION_LEVEL3} ,{resort.location.REGION_LEVEL1}</p>
                    <p>{resort.unit.roomfacts== undefined? " ": resort.unit.value.unitInfo.roomFacts.bedroom.bedroomType}  {resort.unit.value.unitInfo.roomFacts == undefined? " " :"(sleeps "+resort.unit.value.unitInfo.roomFacts.maxOccupancy+")"}</p>
                </div>
            </Grid>
            <div style={{padding: "20px", margin: "auto"}}>{props.location.pathname == "/holding"?
            <HoldingForm /> : <BookingForm />}
            </div>
            
        </StyledDiv>
    )
}

export default BookingHotel
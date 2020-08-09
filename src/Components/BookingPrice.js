import React from 'react'
import Styled from 'styled-components'

const StyledDiv = Styled.div
`
    width: 30%;
    @media only screen and (max-width: 1300px) {
        width: 100%
    } 
`

const BookingPrice = (props) => {

    return (
        <StyledDiv>
            <h1>Summary of Charges</h1>
            <p>Check-in: <b>{props.location.data.date == undefined ? "Not Specified" : props.location.data.date.split("-")[0]}</b></p>
            <p>Check-out: <b>{props.location.data.date == undefined ? "Not Specified" : props.location.data.date.split("-")[1]}</b></p>
            <hr></hr>
            <p>Price: <b>$1234</b></p>
            <p>Promo Code:</p>
            <input type="text"></input>
            <button style={{"margin": "10px", padding: "3px"}}>Apply</button>
            <p>Subtotal ($123/Night): <b>$1234</b></p>
            <p>Taxes: <b>$123</b></p>
            <div style={{"background-color": "#2196f3", "border-radius": "5px"}}>
                <h2>Total Charges</h2>
                <h2 style={{"text-align": "right"}}><b>$1234</b></h2>
            </div>
            <h3>Additional Fees</h3>
            <p>The property has made us aware that the below fees 
                and/or deposits may be charged at check-in, 
                check-out, at time of service or in advance 
                of check-in if so noted. Enjoy your stay! </p>
            <hr></hr>
            <p>No fee information was provided.</p>
            <hr></hr>
            <p>Fees and/or deposits can vary, 
                for example, based on length of 
                stay or the type of unit booked. </p>
        </StyledDiv>
    )
}

export default BookingPrice
import React from 'react'
import Styled from 'styled-components'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CenterContainer from '../Components/CenterContainer'
import PageTitle from '../Components/PageTitle'
import { BookingAPI } from '../Components/APILinks'
import Beach from '../Images/Beach.jpg'
import { FormControl, Input, InputLabel, Button } from '@material-ui/core'
import { XMLData } from '../Components/XMLData'

const ResImage = Styled.img`
    width: 50%;
    height: 50%;
    float: right;
    @media only screen and (max-width: 800px) {
        width: 100%
    }
`

const FormContainer = Styled.div
`
    float: left;
    width: 50%;
    @media only screen and (max-width: 800px) {
        width: 100%
    }
`



const FindMyReservation = () => {
    const [conNum, changeConNum] = React.useState(1)

    const findReservation = (e) => {
        (async () => {
            const XMLString = 
            `<?xml version="1.0"?>
            <requestEnvelope>
                <requestHeader>
                    <controlData>
                        <clientName>${XMLData.clientName}</clientName>
                        <userID>${XMLData.username}</userID>
                        <password>${XMLData.password}</password>
                    </controlData>
                    <processData>
                        <operationName>inquireTraveler</operationName>
                    </processData>
                </requestHeader>
                <InquireTravelerRequest>
                    <reservationToken>
                        <inventoryType>1</inventoryType>
                        <referenceNumber>${conNum}</referenceNumber>
                    </reservationToken>
                </InquireTravelerRequest>
            </requestEnvelope>`

            try {
                const APIresponse = await fetch(BookingAPI, {
                    method: "POST",
                    body: XMLString
                })

                if(!APIresponse.ok) throw Error("Fetch error");

                const result = await APIresponse.text()

                console.log(result)
            } catch(e) {
                console.log(e)
            }
        })()
    }

    return (
            <React.Fragment>
            <Header></Header>
            <PageTitle>Find My reservation</PageTitle>
            <br></br>
                <CenterContainer>
                    <FormContainer>
                        <p>Please be sure to enter the reservation information exactly as it appears on the confirmation e-mail. Please no spaces or dashes in the confirmation number.</p>
                        <br></br>
                        <div style={{margin: 'auto', width: '50%'}}> 
                            <form>
                                <FormControl required={true}>
                                    <InputLabel>Confirmation Number</InputLabel>
                                    <Input onChange={(e) => changeConNum(e.target.value)}/>
                                </FormControl>
                                <br></br>
                                <br></br>
                                <br></br>
                                <Button variant="contained" size='large' onClick={findReservation}> Find Reservation </Button>
                            </form>
                        </div>
                        <br></br>
                    </FormContainer>
                    <br></br>
                    <ResImage src={Beach} alt="A beach."/>

                    <div style={{clear: 'both'}}></div>
                </CenterContainer>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default FindMyReservation
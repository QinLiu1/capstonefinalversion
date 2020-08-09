import React from 'react'

const HotelPropertyInformation = (props) => {


    let content;
    if("loading" in props) {
        content = <h1>{props.loading}</h1>
    } else {
        content = (
            <React.Fragment>
                <div style={{padding: "20px"}}>
                    <h1>{props.property.value.resortname}</h1>
                    <p><b>Resort ID:</b> {props.activity.resortId}</p>
                    <p><b>TripAdvisor Rating:</b> Coming Soon</p>
                    <p><b>Starting at:</b> ${props.resortId} (USD)</p>
                    <p><b>Address:</b> {props.property.value.contact.addresses['address-line1']} { }
                                {props.property.value.contact.addresses['address-line2']} { }
                                {props.property.value.contact.addresses['address-city']} { }
                                {props.property.value.contact.addresses['address-state']} { }
                                {props.property.value.contact.addresses['address-postalcode']} { } 
                                {props.property.value.contact.addresses['address-countryname']}</p>
                    <p><b>Phone number:</b> {props.property.value.contact.telephones}</p>
                </div>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    )

}

export default HotelPropertyInformation
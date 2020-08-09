import React from 'react'

const HotelAvailability = (props) => {


    const onClickBookingHandler = (link) =>{   
        props.history.push({
            pathname:`/booking`,
            data: link
        }
    )}
        
    const onClickHoldingHandler = (link) =>{
        props.history.push({
            pathname:`/holding`,
            data: link
        }
    )}

    return (
        <React.Fragment>
            <div style={{padding: "20px"}}>
                <h1>Availability</h1>
                <table style={{width: "100%", border: "1px solid transparent", borderRadius: "5px", borderSpacing: 0}}>
                    <tr style={{backgroundColor: "#2196f3", border: "1px solid transparent"}}>
                        <th style={{textAlign: "left", padding: "5px"}}>Travel Dates</th>
                        <th style={{textAlign: "left"}}>Unit Details</th>
                        <th style={{textAlign: "left"}}>Price (USD)</th>
                        <th style={{textAlign: "left"}}>Book</th>
                    </tr>
                    <tr style={{border: "1px solid transparent"}}>
                        <td style={{padding: "5px"}}>{props.date == undefined ? `No Date Specified` : props.date}</td>
                        <td>No Unit Details Specified</td>
                        <td>${props.resortId}</td>
                        <td>
                            <button className="remove-btn" onClick={onClickBookingHandler.bind(this, props)}>Book</button> { }
                            <button className="remove-btn" onClick={onClickHoldingHandler.bind(this, props)}>Hold</button>
                        </td>
                    </tr>
                </table>
            </div>
        </React.Fragment>
    )

}

export default HotelAvailability
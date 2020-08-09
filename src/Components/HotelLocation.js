import React from 'react'
import Map from '../Components/MapBox'

const HotelLocation = (props) => {
    const data =[props]
    return (
        <div style={{padding: "20px"}}>
            <h1>Location</h1>
                <Map data={data}/>
        </div>
    )
}

export default HotelLocation
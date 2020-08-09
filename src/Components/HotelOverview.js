import React from 'react'

const HotelOverview = (props) => {

    let content;
    if("loading" in props) {
        content = <h1>{props.loading}</h1>
    } else {
        content = (
            <React.Fragment>
                <div style={{padding: "20px"}}>
                    <h1>Hotel Overview</h1>
                    <p>{props.property.value.highlights['resort-highlights']}</p>
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

export default HotelOverview
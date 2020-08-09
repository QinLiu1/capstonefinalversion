import React from 'react'
import { AppBar, Tabs, Tab, Box } from '@material-ui/core'
import lodash from 'lodash'

const TabPanel = (props) => {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    )
}

const HotelDetailedInformation = (props) => {
    const [location, setLocation] = React.useState(0)
    const nonPublicCategories = ["_id", "resortId", "internal", "urgent", "location", "property", "unit"]
    let categories = []
    let catInfo = {}
    let indexTracker = -1

    // Sets the location of the currently viewed tab
    const handleChange = (event, newLocation) => {
        setLocation(newLocation)
    }

    // Get available categories of information
    for(let key of Object.keys(props)) {
        if(!(nonPublicCategories.includes(key))) {
            categories.push(key)   
        }
    }
    if(props.property !== undefined) {
        categories.push("check-in") // Additional info formated out of non public categories
        categories.push("front desk") // Additional info formated out of non public categories
    }

    // Process information to be readable
    categories.forEach(catKey => {
        if(!("loading" in props)) {
            switch(catKey) {
                case "check-in":
                    catInfo[catKey] = (
                        <ul>
                            <li>Check-In: {props.property.value.checkInCheckOutInfo.checkInTime}</li>
                            <li>Check-Out: {props.property.value.checkInCheckOutInfo.checkInTime}</li>
                        </ul>
                    )
                    break
                case "front desk":
                    catInfo[catKey] = (
                        <ul>
                            <li>Front Desk hours: {props.property.value.frontDesk['hours-of-operation-startTime']} - {} 
                            {props.property.value.frontDesk['hours-of-operation-endTime']}</li>
                        </ul>
                    )
                    break
                case "accessibility":
                    catInfo[catKey] = (
                        <ul>
                            {Object.keys(props.accessibility.value).map((objKey, index) => 
                            <li key={index}>
                                {lodash.startCase(objKey)}: {JSON.stringify(props.accessibility.value[objKey])}
                            </li>)}
                        </ul>
                    )
                    break
                case "activity":
                    catInfo[catKey] = (
                        <ul>
                            {props.activity.value.activities.activity.map((value, index) =>
                                <li key={index}>{value.name}: ({
                                    value.proximity === "Offsite" ? (value.distanceInKms + " KM") : value.proximity
                                })</li>
                            )}
                        </ul>
                    )
                    break
                case "airport":
                    catInfo[catKey] = (
                        <p>
                            {props.airport.value.airports.airport.name} {} 
                            {props.airport.value.airports.airport.code} {}
                            ({props.airport.value.airports.airport.distanceInKms} KM)
                            <br></br><br></br>
                            Airport Shuttle: {props.property.value.location.shuttleServiceToAirport}
                            <br></br><br></br>
                            {props.property.value.location.drivingDirectionsFromNearestAirport}
                        </p>
                    )
                    break
                case "amenity":
                    catInfo[catKey] = (
                        <ul>
                            {props.amenity.value.amenities.amenity.map((value, index) =>
                            <li key={index}>{value.name}: ({
                                value.proximity === "Offsite" ? (value.distanceInKms + " KM") : value.proximity
                            })</li>)}
                        </ul>
                    )
                    break
                case "dining":
                    catInfo[catKey] = (
                        <ul>
                            {Object.keys(props.dining.value['resort-dining']).map((objKey, index) =>
                                <li key={index}>
                                    {lodash.startCase(objKey)}: {props.dining.value['resort-dining'][objKey]}
                                </li>
                            )}
                        </ul>
                    )
            }
        } else {
            catInfo = {"Loading": "Loading"}
        }
    })

    return (
        <React.Fragment>
            <div style={{padding: "20px"}}>
                <h1>Resort Information</h1>
                <AppBar position="static" color="default">
                    <Tabs 
                        value={location}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs"
                    >
                        {categories.map((category, key) => <Tab key={key} label={category} />)}
                    </Tabs>
                </AppBar>

                {categories.map((category, key) => {indexTracker += 1; return (
                    <TabPanel key={key} value={location} index={indexTracker}>
                        {catInfo[category]}
                    </TabPanel>
                )})}
            </div>
        </React.Fragment>
    )

}

export default HotelDetailedInformation
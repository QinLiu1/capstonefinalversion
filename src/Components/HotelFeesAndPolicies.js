import React from 'react'
import lodash from 'lodash'

const HotelFeesAndPolicies = (props) => {
    
    let urgentInfo = props
    let categories = []
    if(!("loading" in props)) urgentInfo = props.urgent.value.urgentInfo

    // Extract string data from nested objects
    const getValue = (obj, array) => {
        if(obj === "") { return [] }
        if(typeof obj === "object") {  obj = Object.keys(obj).map(key => { getValue(obj[key], []) } ) }
        if(typeof obj === "array") { return obj }
        array.push(obj)
        return array
    }

    // Build information categories into readable text
    Object.keys(urgentInfo).map((objKey, indexOne) => {
        if(urgentInfo[objKey] !== "") {
            let info = getValue(urgentInfo[objKey], [])
            info = info.flat(5)
            if(info.length !== 0) {
                let category = (
                    <React.Fragment key={indexOne*3+1}>
                        <h3 key={indexOne}>{lodash.startCase(objKey)}</h3>
                        <ul key={indexOne*2+1}>
                            {info.map((value, index) => <li key={index}>{value}</li>)}
                        </ul>
                    </React.Fragment>)
                categories.push(category)
            }
        }
    })

    return (
        <div style={{padding: "20px"}}>
            <h1>Fees and Policies</h1>
            {categories.map(value => value)}
        </div>
    )
}

export default HotelFeesAndPolicies
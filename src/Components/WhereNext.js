import React from 'react'
import Grid from '@material-ui/core/Grid'
import {GiDramaMasks, FaGolfBall, MdCasino, FaSkiing, FaUmbrellaBeach, FaBeer } from 'react-icons/all'


let icons = [
    {name: "Skii", Icon: FaSkiing }, 
    {name: "Entertainment", Icon: FaBeer },
    {name: "Theme Park", Icon: GiDramaMasks },
    {name: "Golf", Icon: FaGolfBall },
    {name: "Casino", Icon: MdCasino },
    {name: "Beach", Icon: FaUmbrellaBeach }
]

const WhereNext = () => {

    return(
        icons.map((icon) => 
        <Grid item xl={2} lg={2} md={4} sm={4} xs={12}>
            <a href= {"/map/"+icon.name} style={{color: 'White'}}>
                <icon.Icon size={35}/>
            </a>
                <h2 style={{color: 'White'}}>{icon.name}</h2>
            
        </Grid>
)
    )
}

export default WhereNext;
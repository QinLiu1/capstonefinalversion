import React from 'react';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link'


let destinations = [
    {name: "Orlando", Photo: "Orlando" , link: "/map/Orlando"}, 
    {name: "Las Vegas", Photo: "Vegas", link:"/map/Las Vegas"},
    {name: "Caribbean", Photo: "Caribbean", link:"/map/Caribbean Sea"},
    {name: "Cancun & Cozumel", Photo: "Cancun", link:"/map/Cancún"},
    {name: "Puerto Vallarta", Photo: "Vallarta", link:"/map/Puerto Vallarta"},
    {name: "Chile", Photo: "Chile", link:"/map/Chile"},
    {name: "Greece & Cyprus", Photo: "Greece", link:"/map/Greece"},
    {name: "British Columbia, Canada", Photo: "BC", link:"/map/British Columbia"},
    {name: "Italy / Spain / Greece", Photo: "Italy", link:"/map/Italy"}
]


export const RenderImages = () => {
  
    return(
        destinations.map((dest) => 
        
                <Grid item xl={4} lg={4} md={6} sm={4} xs={12}>
                    <Card >
                        <CardActionArea>
                          <Link href={dest.link}>
                            <CardMedia
                                style = {{ height:275 }}
                                image = {require(`../Images/${dest.Photo}.jpg`)}
                                title = {dest.name}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" align='center'>
                            {dest.name}
                            </Typography>
                            </CardContent>
                            </Link>
                        </CardActionArea>
                    </Card>
                </Grid>
        )
    )
}

export default RenderImages;
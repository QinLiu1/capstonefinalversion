import React from 'react'
import Styled from 'styled-components'
import Carusel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import DefaultHotelImage from '../Images/DefaultHotelImage.jpg'

const StyledDiv = Styled.div`
    height: auto;
    width: 50%;
    @media only screen and (max-width: 1300px) {
        width: 100%
    }
`

const HotelImageBrowser = (props) => {

    const [images, setImages] = React.useState([<img style={{width: "100%"}} src={DefaultHotelImage} alt=""/>])

    const imageTypes = ["E", "I", "O", "F", "S"]
    const imageCountPerType = 10


    // Grab images from RCI provided CDN

    React.useEffect(() => {
        imageTypes.forEach(type => {
            for(let i = 1; i < imageCountPerType; i++) {
                let j = `${i}`
                if(i < 10) j = `0${i}`
                let image = new Image()
                let imageSrc = `http://www.rci.com/static/Resorts/Assets/${props.resortId}${type}${j}L.jpg`
                image.src = imageSrc
                image.onload = () => {
                setImages(images => [...images,<img style={{width: "100%"}} src={imageSrc} alt=""/>])
                }
                image.onerror = (error) => { /*console.log(error)*/ }
            }
        })
        images.shift()
   
        
    }, [])
    
    return (
        <StyledDiv>
            <Carusel navButtonsAlwaysVisible={true}>
                
                {images.map((image, index) => <Paper key={index}>{image}</Paper>)}
            </Carusel>
        </StyledDiv>
    )

}

export default HotelImageBrowser
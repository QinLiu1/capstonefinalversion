import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import logo from '../Images/indyKey.png';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';



const CustomButton = styled(({...rest}) => (
    <Button classes={{label: 'label'}} {...rest}/>
  ))`
    .label {
      font-weight: bold;
      font-family: arial;
      font-size: 18px;
    }  
`
const CustomGrid = styled(Grid)`

    padding: 1% 4% 1% 4%;
`

//Header Componet
//This componet is responsible for making the header on the website
const Header = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const hrefs = ['/findmyreservations','/aboutus','/contact'];

    const handleOnclick = () => {
        setMobileOpen(!mobileOpen);
        
    }
    
    const drawer = (
        <List>
        {['Find My reservations', 'About Us', 'Contact Us'].map((text, index) => (
            <ListItem button component="a" key={text} href ={hrefs[index]} >
                <ListItemText primary={text}  />
            </ListItem>
        ))}
      </List>
    )
    
    return(
        <React.Fragment>
            <CustomGrid container wrap='nowrap' >
               <Grid container wrap='nowrap' item xs = {6} justify="flex-start"> 
               <Hidden only={['md','lg','xl']}>
                        <Button onClick={handleOnclick}><MenuIcon /></Button>
                    </Hidden>
                    <a href= "/">
                        <img src={logo}  alt="IndyKey Logo" />
                    </a>
                </Grid>
              
                
                <Hidden only={['sm', 'xs']}>
                    <Grid container direction="row" justify="flex-end" alignItems="center" wrap='nowrap'  item xs ={8}>
                        <CustomButton href="/findmyreservations" color="primary"  size= "large">Find My Resevation </CustomButton>
                        <CustomButton href="/aboutus" color="primary" size= "large">About Us</CustomButton>
                        <CustomButton href="/contact" color="primary" size= "large">Contact Us</CustomButton>
                    </Grid>
                </Hidden>
                </CustomGrid>
                <Drawer
                    variant="temporary"
                    anchor='left'
                    open={mobileOpen}
                    onClick={handleOnclick}
                    ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            
        </React.Fragment>
    )
}

export default Header;
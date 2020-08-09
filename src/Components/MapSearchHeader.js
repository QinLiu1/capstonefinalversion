import React, {useState} from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Region from './Region.js';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Divider from '@material-ui/core/Divider'
import Calendar from '../Components/Calender';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    filter:{
        backgroundColor: 'white',
        display: 'inline-block',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 60,
        maxHeight:55,
        alignItems: 'center',
        // https://css-tricks.com/snippets/css/a-guide-to-flexbox/
      },
    calendarBox:{
        Height:155,
      }
    });


const StyledGrid = styled(Grid)
`
   text-align: center;
`

const MapSearchHeader = (props) =>{
    const classes = useStyles();
    const callBackCalendarData = (data) =>{
        travelDates=""
        if(data != null){
        for(var i =0; i <data.length;i++){
            if(i != 1){
                travelDates += data[i].getDate()+"."+(data[i].getMonth()+1)+"."+data[i].getFullYear()+"-"
            }else{
                travelDates +=data[i].getDate()+"."+(data[i].getMonth()+1)+"."+data[i].getFullYear() 
            } 
        }
    }
        
       
    }

   //Splits the csv back into a javascript array
    var options = Region.split(",");
    var travelDates =""


    const onChangeHandler = (evt) =>{
        if(evt.keyCode === 13){
            props.history.push(`/map/${evt.target.value}/${travelDates}`) 
            window.location.reload(false);
        }
    }


  

    return(
        <React.Fragment>
    <StyledGrid container alignItems="center" spacing={2} >
    <div className={classes.filter}>
            
            <Grid item>
            
                <Autocomplete
                        autoComplete= {true}
                        autoSelect ={true}
                        filterSelectedOptions= {true}
                        options={options}
                        style={{ width: 300 }}
                        onChange={onChangeHandler}
                        renderInput={(params) => 
                        <TextField {...params} label="Where to?" onChange={onChangeHandler}/>
                        }
                    />
                

            </Grid>
            </div>
            <Grid item >
                <div className={classes.filter}>
                <Calendar callBackCalendarData={callBackCalendarData} className = {classes.calendarBox}/>
                </div>
            </Grid>

            </StyledGrid>
        

        </React.Fragment>
    )

}


export default MapSearchHeader
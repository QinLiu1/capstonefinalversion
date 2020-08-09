import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Grid from '@material-ui/core/Grid';
import Map from '../Components/MapBox';
import Table from '../Components/ResortTables.js';
import Container from '@material-ui/core/Container';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Loading from '../Components/Loading'
import TopNavBar from '../Components/TopNavBar';
import Calendar from '../Components/Calender';
import AutoSearch1 from '../Components/MapSearchHeader.js';
import Button from '@material-ui/core/Button'
import { ResortDataAPI } from '../Components/APILinks'
import Hidden from '@material-ui/core/Hidden'
import Popup from "reactjs-popup";


import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  root: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 80,
    maxWidth: '100%',
  },
  grid: {
    marginBottom: 20,
    marginTop: 20,
  },
  map: {
    maxWidth: '100%',
    marginTop: 0,
  }
});


const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',

    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const SearchMap = (props) => {
  const classes = useStyles();
  const [data, changeData] = useState()
  const [loading, isLoading] = useState(true)
  const value = props.match.params.value
  //const date = props.match.params.date
  var query = {
    "$or": [{ "location.REGION_LEVEL1": value }, { "location.REGION_LEVEL2": value }, { "location.REGION_LEVEL3": value }, { "location.CITY": value }, { "activity.value.activities.activity.name": "Downhill " + value + "ng" }, { "activity.value.activities.activity.name": value },
    { "activity.value.activities.activity.name": value + " / Nightlife" }, { "activity.value.activities.activity.name": value + " / Gambling" }]
  }

  
  const usaOnClickHandler = () => {
    changeData(null)
    query =
    {
      "$and": [
        { "location.REGION_LEVEL1": "USA" },
        { "unit.value.unitInfo[0].kitchen": { "$exists": false } }
      ]
    }
    isLoading(true)
    fetchData();
  }
  
  const canadaOnClickHandler = () => {
    changeData(null)
    query = {
      "$and": [
        { "location.REGION_LEVEL1": "Canada" },
        { "unit.value.unitInfo[0].kitchen": { "$exists": false } }
      ]
    }
    isLoading(true)
    fetchData();
  }
  const fullPartialClickHandler = () => {
    changeData(null)
    query =
    {
      "$or":
        [
          { "location.REGION_LEVEL1": "Canada" },
          { "location.REGION_LEVEL1": "USA" },

          {
            "$and":
              [
                { "unit.value.unitInfo[0].kitchen": { "$exists": false } },
                {
                  "$or":
                    [
                      { "unit.value.unitInfo[0].bedroom.bedroomType": "2 Bedroom" },
                      { "unit.value.unitInfo[0].bedroom.bedroomType": "3 Bedroom" },
                      { "unit.value.unitInfo[0].bedroom.bedroomType": "4 Bedroom" }
                    ]
                }
              ]
          } 
        ]
    }

    isLoading(true)
    fetchData();
  }
  const oneBedRoomClickHandler = () => {
    // console.log("============")
    // console.log("handler");
    // console.log(state);
    var query1 =    {
      "$and": [
          {
              "unit.value.unitInfo.roomFacts": {
                  "$exists": true
              }
          },
          {
              "unit.value.unitInfo.roomFacts.bedroom.bedroomType": "1 Bedroom"
          }
      ]
  }

  var query2 =    {
    "$and": [
        {
            "unit.value.unitInfo.roomFacts": {
                "$exists": true
            }
        },
        {
            "unit.value.unitInfo.roomFacts.bedroom.bedroomType": "2 Bedroom"
        }
    ]
}

var query3 =    {
  "$and": [
      {
          "unit.value.unitInfo.roomFacts": {
              "$exists": true
          }
      },
      {
          "unit.value.unitInfo.roomFacts.bedroom.bedroomType": "3 Bedroom"
      }
  ]
}

var query4 =    {
  "$and": [
      {
          "unit.value.unitInfo.roomFacts": {
              "$exists": true
          }
      },
      {
          "unit.value.unitInfo.roomFacts.bedroom.bedroomType": "4 Bedroom"
      }
  ]
}

var query5 =    {
  "$and": [
      {
          "unit.value.unitInfo.roomFacts": {
              "$exists": true
          }
      },
      {
          "unit.value.unitInfo.roomFacts.bedroom.bedroomType": "Hotel"
      }
  ]
}

var query6 =    {
  "$and": [
      {
          "unit.value.unitInfo.roomFacts": {
              "$exists": true
          }
      },
      {
          "unit.value.unitInfo.roomFacts.bedroom.bedroomType": "Studio"
      }
  ]
}

var query7 =    {
  "$and": [
      {
          "unit.value.unitInfo.roomFacts.maxOccupancy": {
              "$exists": true
          }
      },
      {
        "unit.value.unitInfo.roomFacts.maxOccupancy": "2"
      }
  ]
}

var query8 =    {
  "$and": [
      {
          "unit.value.unitInfo.roomFacts.maxOccupancy": {
              "$exists": true
          }
      },
      {
        "unit.value.unitInfo.roomFacts.maxOccupancy": "4"
      }
  ]
}

var query9 =    {
  "$and": [
      {
          "unit.value.unitInfo.roomFacts.maxOccupancy": {
              "$exists": true
          }
      },
      {
        "unit.value.unitInfo.roomFacts.maxOccupancy": "6"
      }
  ]
}

var query10 =    {
  "$and": [
      {
          "unit.value.unitInfo.roomFacts.maxOccupancy": {
              "$exists": true
          }
      },
      {
        "unit.value.unitInfo.roomFacts.maxOccupancy": "8"
      }
  ]
}

var query11 =    {
  "$and": [
      {
          "property.value.adultOnly": {
              "$exists": true
          }
      },
      {
        "property.value.adultOnly": "Yes"
      }
  ]
}

var query12 =    {
  "$and": [
      {
          "accessibility.value.braileOrRaisedSignage": {
              "$exists": true
          }
      },
      {
        "accessibility.value.braileOrRaisedSignage": "Yes"
      }
  ]
}

var query13 =    {
  "$and": [
      {
          "accessibility.value.elevator": {
              "$exists": true
          }
      },
      {
        "accessibility.value.elevator": "Yes"
      }
  ]
}

var query14 =    {
  "$and": [
      {
          "accessibility.value.equipmentForDeaf": {
              "$exists": true
          }
      },
      {
        "accessibility.value.equipmentForDeaf": "Yes"
      }
  ]
}

var query15 =    {
  "$and": [
      {
        "property.value.petsAllowed": {
              "$exists": true
          }
      },
      {
        "property.value.petsAllowed": "Yes"
      }
  ]
}
// not find wheelchair in data yet
// var query16 =    {
//   "$and": [
//       {
//         "wheelchair": {
//               "$exists": true
//           }
//       },
//       {
//         "wheelchair": "Yes"
//       }
//   ]
// }

var query17 =    {
  "$and": [
      {
        "unit.value.unitInfo.kitchen": {
              "$exists": true
          }
      },
      {
        "unit.value.unitInfo.kitchen.features.feature.details.detail": "Full"
      }
  ]
}

var query18 =    {
  "$and": [
      {
        "unit.value.unitInfo.kitchen": {
              "$exists": true
          }
      },
      {
        "unit.value.unitInfo.kitchen.features.feature.details.detail": "Mini"
      }
  ]
}

var query19 =    {
  "$and": [
      {
        "unit.value.unitInfo.kitchen": {
              "$exists": true
          }
      },
      {
        "unit.value.unitInfo.kitchen.features.feature.details.detail": "Partial"
      }
  ]
}

var query20 =    {
  "$and": [
      {
        "activity.value.activities.activity": {
              "$exists": true
          }
      },
      {
        "activity.value.activities.activity.name": "Beach"
      }
  ]
}

var query21 =    {
  "$and": [
      {
        "activity.value.activities.activity": {
              "$exists": true
          }
      },
      {
        "activity.value.activities.activity.name": "Boating"
      }
  ]
}

var query22 =    {
  "$and": [
      {
        "activity.value.activities.activity": {
              "$exists": true
          }
      },
      {
        "activity.value.activities.activity.name": "Casino / Gambling"
      }
  ]
}

var query23 =    {
  "$and": [
      {
        "activity.value.activities.activity": {
              "$exists": true
          }
      },
      {
        "activity.value.activities.activity.name": "Cross Country Skiing"
      }
  ]
}

var query24 =    {
  "$and": [
      {
        "activity.value.activities.activity": {
              "$exists": true
          }
      },
      {
        "activity.value.activities.activity.name": "Downhill Skiing"
      }
  ]
}

var query25 =    {
  "$and": [
      {
        "activity.value.activities.activity": {
              "$exists": true
          }
      },
      {
        "activity.value.activities.activity.name": "Entertainment / Nightlife"
      }
  ]
}

var query26 =    {
  "$and": [
      {
        "activity.value.activities.activity": {
              "$exists": true
          }
      },
      {
        "activity.value.activities.activity.name": "Fishing"
      }
  ]
}

var query27 =    {
  "$and": [
      {
        "activity.value.activities.activity": {
              "$exists": true
          }
      },
      {
        "activity.value.activities.activity.name": "Golf"
      }
  ]
}

var query28 =    {
  "$and": [
      {
        "activity.value.activities.activity": {
              "$exists": true
          }
      },
      {
        "activity.value.activities.activity.name": "Horseback Riding"
      }
  ]
}

var query29 =    {
  "$and": [
      {
        "activity.value.activities.activity": {
              "$exists": true
          }
      },
      {
        "activity.value.activities.activity.name": "Scuba Diving"
      }
  ]
}

var query30 =    {
  "$and": [
      {
        "activity.value.activities.activity": {
              "$exists": true
          }
      },
      {
        "activity.value.activities.activity.name": "Tennis"
      }
  ]
}

var query31 =    {
  "$and": [
      {
        "activity.value.activities.activity": {
              "$exists": true
          }
      },
      {
        "activity.value.activities.activity.name": "Theme Park"
      }
  ]
}



   
    query = {
      "$and": [
          {
              "$or": [
                  {
                      "location.REGION_LEVEL1": value
                  },
                  {
                      "location.REGION_LEVEL2": value
                  },
                  {
                      "location.REGION_LEVEL3": value
                  },
                  {
                      "location.CITY": value
                  },
                  {
                      "activity.value.activities.activity.name": "Downhill " + value + "ng"
                  },
                  {
                      "activity.value.activities.activity.name": value
                  },
                  {
                      "activity.value.activities.activity.name": value + " / Nightlife"
                  },
                  {
                      "activity.value.activities.activity.name": value + " / Gambling"
                  }
              ]
          },
      ]
  }

   if(state.checked1BedRoom===true){
     query["$and"].push(query1);
   }  
    if(state.checked1BedRoom===false){
      delete query[query1];
    }

    if(state.checked2BedRoom===true){
      query["$and"].push(query2);
    }  
     if(state.checked2BedRoom===false){
       delete query[query2];
     }

     if(state.checked3BedRoom===true){
      query["$and"].push(query3);
    }  
     if(state.checked3BedRoom===false){
       delete query[query3];
     }

     if(state.checked4BedRoom===true){
      query["$and"].push(query4);
    }  
     if(state.checked4BedRoom===false){
       delete query[query4];
     }

     if(state.checkedHotel===true){
      query["$and"].push(query5);
    }  
     if(state.checkedHotel===false){
       delete query[query5];
     }

     if(state.checkedStudio===true){
      query["$and"].push(query6);
    }  
     if(state.checkedStudio===false){
       delete query[query6];
     }

     if(state.checked2guests===true){
      query["$and"].push(query7);
    }  
     if(state.checked2guests===false){
       delete query[query7];
     }

     if(state.checked4guests===true){
      query["$and"].push(query8);
    }  
     if(state.checked4guests===false){
       delete query[query8];
     }

     if(state.checked6guests===true){
      query["$and"].push(query9);
    }  
     if(state.checked6guests===false){
       delete query[query9];
     }

     if(state.checked8guests===true){
      query["$and"].push(query10);
    }  
     if(state.checked8guests===false){
       delete query[query10];
     }

     if(state.checkedAdultsOnly===true){
      query["$and"].push(query11);
    }  
     if(state.checkedAdultsOnly===false){
       delete query[query11];
     }

     if(state.checkedBraileorRaisedSignage===true){
      query["$and"].push(query12);
    }  
     if(state.checkedBraileorRaisedSignage===false){
       delete query[query12];
     }

     if(state.checkedElevator===true){
      query["$and"].push(query13);
    }  
     if(state.checkedElevator===false){
       delete query[query13];
     }

     if(state.checkedEquipmentForDeaf===true){
      query["$and"].push(query14);
    }  
     if(state.checkedEquipmentForDeaf===false){
       delete query[query14];
     }

     if(state.checkedPetsAllowed===true){
      query["$and"].push(query15);
    }  
     if(state.checkedPetsAllowed===false){
       delete query[query15];
     }

    //  if(state.checkedWheelchaiirAccessible===true){
    //   query["$and"].push(query16);
    // }  
    //  if(state.checkedWheelchaiirAccessible===false){
    //    delete query[query16];
    //  }

    if(state.checkedFullKitchen===true){
      query["$and"].push(query17);
    }  
     if(state.checkedFullKitchen===false){
       delete query[query17];
     }

     if(state.checkedMiniKitchen===true){
      query["$and"].push(query18);
    }  
     if(state.checkedMiniKitchen===false){
       delete query[query18];
     }

     if(state.checkedPartialKitchen===true){
      query["$and"].push(query19);
    }  
     if(state.checkedPartialKitchen===false){
       delete query[query19];
     }

     if(state.checkedBeach===true){
      query["$and"].push(query20);
    }  
     if(state.checkedBeach===false){
       delete query[query20];
     }

     if(state.checkedBoating===true){
      query["$and"].push(query21);
    }  
     if(state.checkedBoating===false){
       delete query[query21];
     }

     if(state.checkedCasinoGambling===true){
      query["$and"].push(query22);
    }  
     if(state.checkedCasinoGambling===false){
       delete query[query22];
     }

     if(state.checkedCrossCountrySkiing===true){
      query["$and"].push(query23);
    }  
     if(state.checkedCrossCountrySkiing===false){
       delete query[query23];
     }

     if(state.checkedDownhillSkiing===true){
      query["$and"].push(query24);
    }  
     if(state.checkedDownhillSkiing===false){
       delete query[query24];
     }

     if(state.checkedEntertainmentNightlife===true){
      query["$and"].push(query25);
    }  
     if(state.checkedEntertainmentNightlife===false){
       delete query[query25];
     }

     if(state.checkedFishing===true){
      query["$and"].push(query26);
    }  
     if(state.checkedFishing===false){
       delete query[query26];
     }

     if(state.checkedGolf===true){
      query["$and"].push(query27);
    }  
     if(state.checkedGolf===false){
       delete query[query27];
     }

     if(state.checkedHorsebackRiding===true){
      query["$and"].push(query28);
    }  
     if(state.checkedHorsebackRiding===false){
       delete query[query28];
     }

     if(state.checkedScubaDiving===true){
      query["$and"].push(query29);
    }  
     if(state.checkedScubaDiving===false){
       delete query[query29];
     }

     if(state.checkedTennis===true){
      query["$and"].push(query30);
    }  
     if(state.checkedTennis===false){
       delete query[query30];
     }

     if(state.checkedThemePark===true){
      query["$and"].push(query31);
    }  
     if(state.checkedThemePark===false){
       delete query[query31];
     }
    isLoading(true)
    fetchData();
    // console.log("endofhanding")
    // console.log("query")
    // console.log("============")
  }

  async function fetchData() {


    await fetch(ResortDataAPI,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(query)
      })
      .catch(error => console.error('ERROR: ', error))
      .then(res => res.json())
      .then(data => {
        console.log(data)
        console.log(query)
        changeData(data)
        isLoading(false)
      })
  }

  useEffect(() => {
    fetchData();
   
  },[]);

 //set default open panel===> React.useState('panel1'); etc..
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

//set checkbox bool 
const [state, setState] = React.useState({
  checkedHotel: false,
  checkedStudio: false,
  checked1BedRoom: false,
  checked2BedRoom: false,
  checked3BedRoom: false,
  checked4BedRoom: false,
  checked2guests: false,
  checked4guests: false,
  checked6guests: false,
  checked8guests: false,
  checkedAdultsOnly: false,
  checkedBraileorRaisedSignage: false,
  checkedElevator: false,
  checkedEquipmentForDeaf: false,
  checkedPetsAllowed: false,
  checkedWheelchaiirAccessible: false,
  checkedFullKitchen: false,
  checkedMiniKitchen: false,
  checkedPartialKitchen: false,
  checkedBeach: false,
  checkedBoating: false,
  checkedCasinoGambling: false,
  checkedCrossCountrySkiing: false,
  checkedDownhillSkiing: false,
  checkedEntertainmentNightlife: false,
  checkedFishing: false,
  checkedGolf: false,
  checkedHorsebackRiding: false,
  checkedScubaDiving: false,
  checkedTennis: false,
  checkedThemePark: false,
});
  
  const handleChangeCheckBoxBedRoom = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    // console.log(state)
    // console.log({[event.target.name]: event.target.checked})
  };
 
  useEffect(() => {
    if(state.checked1BedRoom === true || state.checked1BedRoom === false){
      oneBedRoomClickHandler();
    } 
  }, [state]);
  //console.log(state)

  return (
    <React.Fragment>
      <Header />

      <TopNavBar>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <div className={classes.filter} >
              <AutoSearch1 {...props} />
            </div>
          </Grid>

          <Grid item >
            <Button variant="contained" onClick={usaOnClickHandler} >USA</Button>
          </Grid>
          <Grid item >
            <Button variant="contained" onClick={canadaOnClickHandler}>Canada</Button>
          </Grid>
          <Grid item  >
            <Button variant="contained" onClick={fullPartialClickHandler}>Full and Partial Kitchen</Button>
          </Grid>
          <Grid item  >
            <Popup contentStyle={{width: "500px"}} trigger={open => (<Button variant="contained" >
              Filters</Button>
            )}
              position="bottom"
              closeOnDocumentClick
            ><div>
                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>NUMBER OF  GUESTS</Typography>
                  </AccordionSummary>
                   Bedroom Type Options:               
                  <AccordionDetails>
                    <FormGroup column="true">
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedHotel} onChange={handleChangeCheckBoxBedRoom} name="checkedHotel" />}
                        label="Hotel"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedStudio} onChange={handleChangeCheckBoxBedRoom} name="checkedStudio"  />}
                        label="Studio"
                      />
                    <FormControlLabel
                        control={<Checkbox checked={state.checked1BedRoom} onChange={handleChangeCheckBoxBedRoom}  name="checked1BedRoom" />}
                        label="1 BedRoom"
                      />
                    </FormGroup>

                    <FormGroup column="true">
                    <FormControlLabel
                        control={<Checkbox checked={state.checked2BedRoom} onChange={handleChangeCheckBoxBedRoom} name="checked2BedRoom" />}
                        label="2 BedRoom"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checked3BedRoom} onChange={handleChangeCheckBoxBedRoom} name="checked3BedRoom" />}
                        label="3 BedRoom"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checked4BedRoom} onChange={handleChangeCheckBoxBedRoom} name="checked4BedRoom" />}
                        label="4+ BedRoom"
                      />
                      </FormGroup>
                  </AccordionDetails>
                  Number of Guests:
                  <AccordionDetails>
                    <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={state.checked2guests} onChange={handleChangeCheckBoxBedRoom} name="checked2guests" />}
                        label="2+"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checked4guests} onChange={handleChangeCheckBoxBedRoom} name="checked4guests" />}
                        label="4+"
                      />
                    <FormControlLabel
                        control={<Checkbox checked={state.checked6guests} onChange={handleChangeCheckBoxBedRoom} name="checked6guests" />}
                        label="6+"
                      />
                         <FormControlLabel
                        control={<Checkbox checked={state.checked8guests} onChange={handleChangeCheckBoxBedRoom} name="checked8guests" />}
                        label="8+"
                      />
                    </FormGroup>
                 
                  </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>OTHER OPTHIOS:</Typography>
                  </AccordionSummary>
                  Resort Options:
                  <AccordionDetails>
                  <FormGroup column="true">
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedAdultsOnly} onChange={handleChangeCheckBoxBedRoom} name="checkedAdultsOnly" />}
                        label="Adults Only"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedBraileorRaisedSignage} onChange={handleChangeCheckBoxBedRoom} name="checkedBraileorRaisedSignage" />}
                        label="Braile or Raised Signage"
                      />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedElevator} onChange={handleChangeCheckBoxBedRoom} name="checkedElevator" />}
                        label="Elevator"
                      />
                    </FormGroup>

                    <FormGroup column="true">
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedEquipmentForDeaf} onChange={handleChangeCheckBoxBedRoom} name="checkedEquipmentForDeaf" />}
                        label="Equipment For Deaf"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedPetsAllowed} onChange={handleChangeCheckBoxBedRoom} name="checkedPetsAllowed" />}
                        label="Pets Allowed"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedWheelchaiirAccessible} onChange={handleChangeCheckBoxBedRoom} name="checkedWheelchaiirAccessible" />}
                        label="Wheelchaiir Accessible"
                      />
                      </FormGroup>
                  </AccordionDetails>
                  Kitchen Options:
                  <AccordionDetails>
                    <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedFullKitchen} onChange={handleChangeCheckBoxBedRoom} name="checkedFullKitchen" />}
                        label="FullKitchen"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedMiniKitchen} onChange={handleChangeCheckBoxBedRoom} name="checkedMiniKitchen" />}
                        label="MiniKitchen"
                      />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedPartialKitchen} onChange={handleChangeCheckBoxBedRoom} name="checkedPartialKitchen" />}
                        label="PartialKitchen"
                      />
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>AREA ACTIVITIES</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  <FormGroup column="true">
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedBeach} onChange={handleChangeCheckBoxBedRoom} name="checkedBeach" />}
                        label="Beach"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedBoating} onChange={handleChangeCheckBoxBedRoom} name="checkedBoating" />}
                        label="Boating"
                      />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedCasinoGambling} onChange={handleChangeCheckBoxBedRoom} name="checkedCasinoGambling" />}
                        label="Casino/Gambling"
                      />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedCrossCountrySkiing} onChange={handleChangeCheckBoxBedRoom} name="checkedCrossCountrySkiing" />}
                        label="Cross Country Skiing"
                      />
                    </FormGroup>
                    <FormGroup column="true">
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedDownhillSkiing} onChange={handleChangeCheckBoxBedRoom} name="checkedDownhillSkiing" />}
                        label="Downhill Skiing"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedEntertainmentNightlife} onChange={handleChangeCheckBoxBedRoom} name="checkedEntertainmentNightlife" />}
                        label="Entertainment/Nightlife"
                      />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedFishing} onChange={handleChangeCheckBoxBedRoom} name="checkedFishing" />}
                        label="Fishing"
                      />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedGolf} onChange={handleChangeCheckBoxBedRoom} name="checkedGolf" />}
                        label="Golf"
                      />
                    </FormGroup>
                    <FormGroup column="true">
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedHorsebackRiding} onChange={handleChangeCheckBoxBedRoom} name="checkedHorsebackRiding" />}
                        label="Horseback Riding"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={state.checkedScubaDiving} onChange={handleChangeCheckBoxBedRoom} name="checkedScubaDiving" />}
                        label="Scuba Diving"
                      />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedTennis} onChange={handleChangeCheckBoxBedRoom} name="checkedTennis" />}
                        label="Tennis"
                      />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedThemePark} onChange={handleChangeCheckBoxBedRoom} name="checkedThemePark" />}
                        label="Theme Park"
                      />
                    </FormGroup>
                  </AccordionDetails>
                </Accordion> </div>
            </Popup>
          </Grid>
        </Grid>
      </TopNavBar>



      <Container fixed className={classes.root}>
        <Grid container direction="row">
          {loading ? <Loading /> :
            <React.Fragment>
              <Grid item xs={12} lg={6} className={classes.grid}>
                <Table data = {data} {...props} />
              </Grid>
              <Hidden only={['xs', 'sm', 'md']}>
                <br></br>
                <Grid item xs={6} className={classes.map} >
                  <Map data={data} />
                </Grid>
              </Hidden>

            </React.Fragment>
          }
        </Grid>
      </Container>

      <Footer />
    </React.Fragment>
  )
}

export default SearchMap;
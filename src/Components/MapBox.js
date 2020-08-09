import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    mapbox: {
        width: "48vw",
        height: "calc(100vh - 64px)",
        position: "sticky",
        zIndex: 1,
        top: 64,
        float: "inherit",
        boxSizing: "border-box",
        marginTop: 0,
        marginBottom: 0,
    },
}));
export default function MyComponent(props) {
const classes = useStyles();


//set view port 
  const [viewport, setViewport] = useState({
    // latitude: Number(props.data[0].location.LATITUDE),
    // longitude: Number(props.data[0].location.LONGITUDE),
    latitude: Number(props.data[0] == undefined ? null : props.data[0].location.LATITUDE),
    longitude: Number(props.data[0] == undefined ? null : props.data[0].location.LONGITUDE),
    width: "49vw",
    height: "100vh",
    zoom: 8
  });

    //set select
    const [selectedPark, setSelectedPark] = useState(null);

    // click effect
    useEffect(() => {
        const listener = (e) => {
            if (e.key === "Escape") {
                setSelectedPark(null);
            }
        };
        window.addEventListener("keydown", listener);
        
        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);
  
  return (
    <div className={classes.mapbox}>
      <ReactMapGL
        {...viewport}
        //mapbox token store on local
        mapboxApiAccessToken={"pk.eyJ1IjoicWlubGl1IiwiYSI6ImNrYmFpbW5jejBvZjQyeG8xd2Yyb29jcnIifQ.EL6CIlc_L5843_l836tC8g"}
        //styles of the map
        mapStyle={"mapbox://styles/qinliu/ckbaisoyh0k9s1in6r8e7n6hy"}
        //change view port if move or zoom
        onViewportChange={viewport => {
          setViewport(viewport);
        }}  
      >
        {/* markers form the import data. */}
        {props.data.map(park => (
          
            
          <Marker
            key={park.resortId} 
            latitude={Number(park.location == undefined? null : park.location.LATITUDE )}
            longitude={Number(park.location== undefined? null : park.location.LONGITUDE)}
          >
            <button
              className="marker-btn"
              // click event for display park info
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            ><span>${park.resortId}</span>
            </button>
          </Marker>
          
        ))}
      {/* if selected on park, popup info of the park */}
        {selectedPark ? (
          <Popup
          // match and update the coordinates if click the marker
            latitude={Number(selectedPark.location.LATITUDE == undefined? null : selectedPark.location.LATITUDE )}
            longitude={Number(selectedPark.location.LONGITUDE == undefined? null : selectedPark.location.LONGITUDE)}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div  >
            <img alt="complex" src={'https://www.rci.com/static/Resorts/Assets/'+selectedPark.location.RESORTCODE+'E01L.jpg'} />
              <h2>{selectedPark.location.RESORTNAME}</h2>
              {/* <p>{selectedPark.properties.DESCRIPTIO}</p> */}
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

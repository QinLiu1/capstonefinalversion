// import React from 'react';
// import { makeStyles,ThemeProvider,createMuiTheme  } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import * as parkDate from "../data/skateboard-parks.json";
// import Hidden from '@material-ui/core/Hidden';
// import TopSortByMenu from '../Components/TopSortByMenu';
// import ScrollUpButton from "react-scroll-up-button";
// import Pagination from "../Components/PageButton";
// import { TablePagination } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     float: "left",
//     width: "52vw",
//     marginTop: "-85px",
//     paddingTop: 100,
//     paddingRight: 20,
//     paddingBottom: 100,
//     paddingLeft: 20,
//     marginLeft :0,
//     marginRight :0,
//   },

//   paper: {
//     padding: theme.spacing(2),
//     boxSizing:"border-box",
//     marginLeft :0,
//     maxWidth: "90%",
//     marginTop: 20,
//     marginBottom: 20 ,
//     width: "100%",
//     display: 'block',
//     minHeight: "100%",
//     overflow: 'hidden',
//     zIndex: 0,
//     left: 10,
//     top: 0,
//     position:"relative",
//     display: "table",
//     minHeight: 175,
//     // width: 52,
//     // marginTop: -85,
//     // paddingTop:0,
//     // paddingright:20,
//     // paddingBottom:100,
//     // paddingLeft: 20,
//     // boxSizing: "border-box"
//   },
//   image: {
//     width: 220,
//     minWidth: 175,
//     maxWidth: 220,
//     display: "table-cell",
//     position: "relative",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",

//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
//   SortbyAndPagination:{
//   userSelect: 'none',
    
//   },
//   pagination:{
//   float:'left',
//   },
//   sortByMenu:{
//     position:"static",
//     float:"right",
//     right: "100px",
//     overflow: "auto",
//   },

//   backTotop:{
//   position:"static",
//    float:"left"
//   },
// }));
 
// export default function ComplexGrid() {
  
//   const classes = useStyles();

//   const THEME = createMuiTheme({
//     typography: {
//       subtitle2:{
//      fontFamily: "'Roboto',Helvetica,sans-serif",
//      fontSize: "20px",
//      fontStyle: "normal",
//      fontWeight: 500,
//      fontHeight: 400,
//      lineHeight: "20px",
//      color: "#00718a",
//      padding: "2px,0,0,0",
//     },
//     body1:{
//       fontFamily: "'Roboto',Helvetica,sans-serif",
//       fontSize: "11px",
//       fontStyle: "normal",
//       fontWeight: 500,
//       lineHeight: "11px",
//       color: "#333",
//      },
//      span:{
     
//      },
//      backTotop:{
//       position: "sticky",
//       overflow: "hidden",
//       display:"block",
//      }
//   }
//  });

//   return (
//     <div className={classes.root}>
//      <div className={classes.SortbyAndPagination}>
//        <div className={classes.pagination}>1 - 40 of 61
//        <div className={classes.sortByMenu}><TopSortByMenu/>
//        </div>
//        </div>
//      </div>
      
//       {parkDate.features.map(park => (
//       <Paper elevation={3} className={classes.paper} key={park.properties.PARK_ID}>
//         <Grid  container
//   item xs={12} spacing={3} >
//           <Grid item>
//             <ButtonBase className={classes.image}>
//               <img className={classes.img} alt="complex" src="//www.rci.com/static/Resorts/Assets/0462E01L.jpg" />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={2}>
//               <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1">
//                     {park.properties.NAME}
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                 {park.properties.ADDRESS}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                  {park.properties.FACILITYID}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                 {park.properties.FACILITY}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                 {park.properties.DESCRIPTIO}
                
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                 <img className={classes.img} alt="complex" src="//www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.5-32772-5.svg" />
//                   <button className="remove-btn">See Resort</button>
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Grid item>
//             <ThemeProvider  theme={THEME}>
//               <Typography variant="body1">Starting at</Typography>
//               <Typography variant="subtitle2">${park.properties.PARK_ID}.<Typography component="span" color="inherit">00*</Typography></Typography>
//               <Typography variant="body1">for 7 nights</Typography>
//             </ThemeProvider >
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>
//       ))}
      
//       <div className={classes.backTotop}>
//        <ScrollUpButton ToggledStyle={{left:50}} ContainerClassName="root"/>
//        </div>
       
//     </div>
//   );
// }
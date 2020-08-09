import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles,ThemeProvider,createMuiTheme,useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TopSortByMenu from '../Components/TopSortByMenu';
import ScrollUpButton from "react-scroll-up-button";
import { TablePagination } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    float: "left",
    width: "100%",
    marginTop: "-85px",
    paddingTop: 100,
    paddingRight: 20,
    paddingBottom: 100,
    paddingLeft: 20,
    marginLeft :0,
    marginRight :0,
  },

  paper: {
    padding: theme.spacing(2),
    boxSizing:"border-box",
    marginLeft :0,
    maxWidth: "90%",
    marginTop: 20,
    marginBottom: 20 ,
    width: "100%",
    display: 'block',
    minHeight: "100%",
    overflow: 'hidden',
    zIndex: 0,
    left: 10,
    top: 0,
    position:"relative",
    display: "table",
    minHeight: 175,
  },
  image: {
    width: 220,
    minWidth: 175,
    maxWidth: 220,
    display: "table-cell",
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  SortbyAndPagination:{
  userSelect: 'none',
    
  },
  pagination:{
  float:'left',
  },
  sortByMenu:{
    position:"static",
    float:"right",
    right: "100px",
    overflow: "auto",
  },

  backTotop:{
  position:"static",
   float:"left"
  },
}));

//styles for paging
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

//paging  actions
function TablePaginationActions(props) {

  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

 
export default function ComplexGrid(props) {
  

  const onClickHandler = (data) =>{
    props.history.push({
      pathname: `/hotel/${data.link}`,
      date: data.bookingDate
    }) 
  }



  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const THEME = createMuiTheme({
    typography: {
      subtitle2:{
     fontFamily: "'Roboto',Helvetica,sans-serif",
     fontSize: "20px",
     fontStyle: "normal",
     fontWeight: 500,
     fontHeight: 400,
     lineHeight: "20px",
     color: "#00718a",
     padding: "2px,0,0,0",
    },
    body1:{
      fontFamily: "'Roboto',Helvetica,sans-serif",
      fontSize: "11px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "11px",
      width: "100%",
      color: "#333",
     },
     span:{
     
     },
     backTotop:{
      position: "sticky",
      overflow: "hidden",
      display:"block",
     }
  }
 });

   //const emptyRows = rowsPerPage - Math.min(rowsPerPage, Data.length - page * rowsPerPage);

   const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <div className={classes.root}>
    <div className={classes.SortbyAndPagination}>
      <div className={classes.sortByMenu}><TopSortByMenu/>
      </div>
      </div>
    
      <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={props.data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
      
      {(rowsPerPage > 0 ? props.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : props.data
          ).map(resort => (
          resort.property != undefined ? 
          <React.Fragment>
      <Paper elevation={3} className={classes.paper} key={resort._id}>
        <Grid  container
        item xs={12} spacing={3} >
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={'https://www.rci.com/static/Resorts/Assets/'+resort.resortId + 'E01L.jpg'} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                    {resort.location === undefined? " " : resort.location.RESORTNAME}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {resort.property == undefined ? "No Address Provided": resort.property.value.contact.addresses['address-line2']}  
                </Typography>
                <Typography variant="body2" gutterBottom>
                 {resort.property === undefined ? "No Address Provided": resort.property.value.highlights['destination-highlights']} 
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <button className="remove-btn" onClick={onClickHandler.bind(this, {link: resort.resortId, bookingDate: props.date })}>See Resort</button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
            <ThemeProvider  theme={THEME}>
              <Typography variant="body1">Starting at</Typography>
              <Typography variant="subtitle2">${resort.resortId }.<Typography component="span" color="inherit">00*</Typography></Typography>
              <Typography variant="body1">for 7 nights</Typography>
            </ThemeProvider >
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </React.Fragment> :
      null))}
      <div className={classes.backTotop}>
       <ScrollUpButton ToggledStyle={{left:50}} ContainerClassName="root"/>
       </div>
    </div>
  );
}
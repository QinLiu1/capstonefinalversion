import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Terms from './Pages/Terms';
import Contact from './Pages/ContactUs';
import Privacy from './Pages/Privacy';
import PageNotFound from './Pages/PageNotFound';
import FindMyReservation from './Pages/FindMyReservation';
import BookingAndHolding from './Pages/BookingAndHolding';
import SearchMap from './Pages/SearchMap';



import DisplayHotel from './Pages/DisplayHotel.js';




function App() {
  return (
    <React.Fragment>
       <Router>
         <Switch>
           <Route exact path = "/" component= {Homepage} />
           <Route exact path = "/findmyreservations" component = {FindMyReservation} />
           <Route exact path = "/aboutus" component = {AboutUs} />
           <Route exact path = "/contact/" component = {Contact} />
           <Route exact path = "/terms-and-conditions" component = {Terms} />
           <Route exact path = "/privacy-notice" component = {Privacy} />
           <Route exact path = "/map/:value/:date" component ={SearchMap} />
           <Route exact path = "/map/:value" component ={SearchMap} />
           <Route exact path = "/hotel/:id" component = {DisplayHotel} />
           <Route exact path = "/booking" component = {BookingAndHolding} />
           <Route exact path = "/holding" component = {BookingAndHolding} />
           <Route component={PageNotFound} />
         </Switch>
       </Router>
    </React.Fragment>
  );
  
}

export default App;

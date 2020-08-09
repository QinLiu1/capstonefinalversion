import React, {useState} from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';


	

const Calendar = (props) =>{
    const [value, onChange] = useState([new Date(), new Date()]);
    props.callBackCalendarData(value)
    return( 
      <DateRangePicker
        onChange={onChange}
        value={value}
      />
    )

}

export default Calendar;
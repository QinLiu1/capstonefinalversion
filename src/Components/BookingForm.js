import React from 'react'
import Styled from 'styled-components'
import { Formik} from 'formik';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import valid from 'card-validator'; 
import MenuItem from '@material-ui/core/MenuItem';
import * as Yup from "yup"


const StyledDiv = Styled.div
`
    width: 60%;
    @media only screen and (max-width: 1300px) {
        width: 100%
    } 
    float: left;
`



    
const BookingForm = () => {
    const values = 
    { firstName: "",
    lastName:"",
    email: "", 
    address: "",
    apt:"",
    city: "", 
    state:"",
    country:"",
    postalCode: "",
    phoneNumber: "",
    cardType: "",
    creditCardNumber: "",
    month: "",
    Year:"",
    csv:""
    }

    const cardTypes =[
        "Visa",
        "Mastercard",
        "American Express",
        "Discover"
    ]

    const months = [
        "01","02","03","04","05","06","07","08","09","10","11","12"
    ]
    const years =["2020","2021","2022","2023", "2024","2025","2026","2027", "2028","2029","2030"]

const validationSchema = Yup.object({
    firstName: Yup.string()
    .required("Required"),
    lastName:Yup.string()
    .required("Required"),
    email: Yup.string()
    .email()
    .required("Required"),
    address: Yup.string()
    .required("Required"),
    city: Yup.string()
    .required("Required"),
    state: Yup.string()
    .required("Required"),
    country: Yup.string()
    .required("Required"),
    postalCode: Yup.string()
    .required("Required"),
    phoneNumber: Yup.string()
    .matches(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/, "ex (123)2345068, 1234567890, (123) 456 789")
    .required("Required"),

    cardType:
    Yup.string()
    .required("Required"),
    creditCardNumber: 
    Yup.string()
    .matches(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,"Please enter Valid credit card (ex. 123456789123456)")
    .required("Required"),
    month:
    Yup.string()
    .required("Required"),
    Year:
    Yup.string()
    .required("Required"),
    csv:
    Yup.string()
    .matches(/^[0-9]{3}/, "Must be 3 digits")
    .max(3)
    .required("Required")
})


    
  
    return (
        <StyledDiv>
            <div>
            
                <Formik
                    validationSchema={validationSchema}
                    initialValues={values}
                    onSubmit={(values, actions) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                    }, 1000);
                }}
                >  
                {props => (
                    <Paper>
                    <form onSubmit={props.handleSubmit}>
                    <h1>Customer / Billing Info</h1>
                        <TextField
                                name="email"
                                label="Email"
                                helperText={props.touched.email? props.errors.email : ""}
                                error={props.touched.email&& Boolean(props.errors.email)}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.email}
                                fullWidth
                                required />
                            <TextField
                            
                                name="firstName"
                                label="First Name"
                                helperText={props.touched.firstName? props.errors.firstName : ""}
                                error={props.touched.firstName&& Boolean(props.errors.firstName)}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.firstName}
                                fullWidth
                                required
                            />
                            <TextField
                                id="lastName"
                                name="lastName"
                                helperText={props.touched.lastName? props.errors.lastName : ""}
                                error={props.touched.lastName&& Boolean(props.errors.lastName)}
                                label="last Name"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.lastName}
                                fullWidth
                                required
                                
                            />
                            <TextField
                                name="address"
                                label="Address"
                                helperText={props.touched.address? props.errors.address : ""}
                                error={props.touched.address&& Boolean(props.errors.address)}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.address}
                                fullWidth
                                required
                            />
                            <TextField
                                name="apt"
                                label="Apt."
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.apt}
                                fullWidth
                                
                            />
                            <TextField
                                name="city"
                                label="City"
                                helperText={props.touched.city? props.errors.city : ""}
                                error={props.touched.city&& Boolean(props.errors.city)}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.city}
                                fullWidth
                                required
                            />
                            <TextField
                                name="state"
                                label="State/Province"
                                helperText={props.touched.state? props.errors.state : ""}
                                error={props.touched.state&& Boolean(props.errors.state)}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.state}
                                fullWidth
                                required
                            />
                            <TextField
                                name="country"
                                label="Country"
                                helperText={props.touched.country? props.errors.country : ""}
                                error={props.touched.country&& Boolean(props.errors.country)}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.country}
                                fullWidth
                                required
                            />
                            <TextField
                                name="postalCode"
                                label="Postal Code"
                                helperText={props.touched.postalCode? props.errors.postalCode : ""}
                                error={props.touched.postalCode&& Boolean(props.errors.postalCode)}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.postalCode}
                                fullWidth
                                required
                            />
                            <TextField
                                name="phoneNumber"
                                label="Phone Number"
                                helperText={props.touched.phoneNumber? props.errors.phoneNumber : ""}
                                error={props.touched.phoneNumber&& Boolean(props.errors.phoneNumber)}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.phoneNumber}
                                fullWidth
                                required
                            />
                
                            <br></br>
                            <h1>Payment Information</h1>

                            <TextField
                                name="cardType"
                                select
                                label="card Type"
                                helperText={props.touched.cardType? props.errors.cardType : ""}
                                error={props.touched.cardType&& Boolean(props.errors.cardType)}
                                //onChange={handleCardChange}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.cardType}
                                fullWidth
                                required
                            >
                                 {cardTypes.map((option) => (
                                <MenuItem key={option} value={option}>
                                {option}
                                </MenuItem>
                            ))}
                            </TextField>
                               <TextField
                                name="creditCardNumber"
                                label="Credit Card Number"
                                helperText={props.touched.creditCardNumber? props.errors.creditCardNumber : ""}
                                error={props.touched.creditCardNumber&& Boolean(props.errors.creditCardNumber)}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.creditCardNumber}
                                fullWidth
                                required
                            />
                               <TextField
                               select
                                name="month"
                                label="month"
                                helperText={props.touched.month? props.errors.month : ""}
                                error={props.touched.month&& Boolean(props.errors.month)}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                //onChange={handleMonthCardChange}
                                value={props.values.month}
                                fullWidth
                                required
                            >
                             {months.map((option) => (
                                <MenuItem key={option} value={option}>
                                {option}
                                </MenuItem>
                            ))}
                            </TextField>
                               <TextField
                                select
                                name="Year"
                                label="Year"
                                helperText={props.touched.Year? props.errors.Year : ""}
                                error={props.touched.Year&& Boolean(props.errors.Year)}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.Year}
                                fullWidth
                                required
                            >{years.map((option) => (
                                <MenuItem key={option} value={option}>
                                {option}
                                </MenuItem>
                            ))}
                            </TextField>
                               <TextField
                                name="csv"
                                label="csv"
                                helperText={props.touched.csv? props.errors.csv : ""}
                                error={props.touched.csv&& Boolean(props.errors.csv)}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.csv}
                                fullWidth
                                required
                            />

                            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                onClick={props.handleSubmit}
                            >
                            Submit
                            </Button>
                    </form>
                 </Paper>
                )}
                </Formik>
            </div>
        </StyledDiv>
    )
}

export default BookingForm
import React from 'react'
import Styled from 'styled-components'
import { Formik } from 'formik';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as Yup from "yup"

const StyledDiv = Styled.div
`
    width: 60%;
    @media only screen and (max-width: 1300px) {
        width: 100%
    } 
    float: left;
`


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

})

const HoldingForm = () =>{

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
    }
    return(

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
                <h1>Customer Info for holding</h1>
                    <p>This is a 24 Hour hold. You will not be asked for payment information until you confirm it. If you do nothing during the 24 Hour period, this hold will be automatically released for others to reserve.</p>
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

export default HoldingForm;
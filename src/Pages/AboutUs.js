import React from 'react'
import Styled from 'styled-components'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PageTitle from '../Components/PageTitle'
import CenterContainer from '../Components/CenterContainer'
import FAQBanner from '../Images/FAQBanner.jpg'
//import Grid from '@material-ui/core/Grid'

const FAQImage = Styled.img`
    width: 100%;
`

const FAQBlurb = Styled.p`
    padding: 20px;
`

const FAQTitle = Styled.h2`
    text-align: center;
`

const AboutUs = () => (
    <React.Fragment>
        <Header></Header>
        {/*Title*/}
        <PageTitle>About Us</PageTitle>
        {/*Banner Image*/}
        <FAQImage src={FAQBanner} alt="View from a resort."/>
        <CenterContainer>
            {/*Text*/}
            <FAQBlurb>Redeem IndyKey rewards for discounted resort stays. All prices are in USD. Save up to 60%+ 
                off major travel site rates. Each booking requires 10,000 IndyKey Points to redeem in addition 
                to the posted price. Simply book & 10,000 IndyKey Reward Points will automatically be deducted 
                from your account per transaction.<br></br><br></br>When you book these resort stays, you are contracting 
                for travel directly with Resort Rental, LLC, a wholly owned subsidiary of Wyndham Destinations.
                <br></br><br></br>IndyKey helps Independent Hotels compete with larger brands and chains by rewarding 
                travellers for staying at Independents. Travellers earn 20 points per dollar spent at IndyKey 
                Preferred Independent Hotels, 8 points per dollar at Independents and even earn 4 points per 
                dollar when booking brand name hotels when using the IndyKey booking platform
            </FAQBlurb>
            {/*FAQ Title*/}
            <br></br>
            <br></br>
            <br></br>
            <FAQTitle>Frequently Asked Questions</FAQTitle>
            {/*FAQ*/}
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>What makes our accommodations different from a hotel?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                We offer spacious accommodations that give you the room to relax, spread out and still have everyone together. Enjoy the comforts of home, which may include a kitchen, washer/dryer, multiple bedrooms and the amenities of a resort, such as a swimming pool or workout facility.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>How many resorts are there to choose from?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                There are thousands of resorts around the world to choose from located in the US, Canada, the Caribbean, Mexico, Europe and more.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>What types of discounted vacation stays can I book?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                Our vacation rental weeks available are located in popular destinations around the world. Most rentals start on a Friday, Saturday or a Sunday and last for seven nights. The weekly rate will range from $400 to $2000.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>Is the price shown per person per night or per unit?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                All prices are shown per apartment per stay, which means it is the same price for one person up to and including the maximum occupancy within the apartment size.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>I am looking for a vacation rental at a specific location and/or time and can’t find it. Can you help me?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                Availability changes daily so I would encourage you to check back daily. Also,it is good to expand your search to nearby destinations as well as expanding arrival date dates by a few weeks on either side.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>How old do I have to be to book a vacation?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                The person booking the travel must be at least 21 years of age or older. The resort or property manager may otherwise refuse access to the reserved accommodation.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>Do I have to stay all 7 nights?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                Most of the resort accommodations price options are for 7-night stays, except for Short Stays, which are typically available for 3- or 4-night stays. However, you don’t have to stay all 7 nights. You can choose to check-in a few days late or check-out a few days early. Simply contact the resort in advance to notify them of your desired schedule changes. Although the price won’t change and you will still be paying for the full week, it is still a fantastic deal!
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>Do I have to book from weekend to weekend, or can I choose a mid-week day to begin my vacation?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                All check in days will vary by property, please refer to the search results on website that clearly state the available check in days for your chosen resort and destination.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>Do the resorts accommodate special needs?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{display: 'block'}}>
                Many of the resort condo rentals offer handicapped-accessible accommodations. Please look for the following descriptions: <br></br><br></br><b>Disability Accessible Units</b> – the resort unit only meets disability accessibility requirements<br></br><br></br><b>Disability Accessible Resorts</b> – the resort is disability accessible<br></br><br></br>We understand our customer needs vary greatly and each property is different. It is best to contact one of your customer service representative for more information.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>Are pets allowed?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                For the most part, pets are not allowed on property. However, a select few resort condo rentals do allow pets for an additional fee. Please contact the resort to check on their pet policy before bringing any pets with you.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>Do you offer all-inclusive resorts?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                Yes, we do. All all-inclusive resorts are identified within the search.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>How far in advance do I have to make a reservation to ensure there is availability?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                Condos may become available anywhere from 3 to 360 days in advance of the scheduled check-in date. Because our system operates in a live environment our availability is always subject to change, and we encourage you to search our website for the latest up to date availability.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>How do I cancel a reservation?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                We offer 24 hour free of charge cancellation from time of booking, provided your reservation is not within 3 days of travel.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>What is your cancellation policy?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                We offer 24 hour free of charge cancellation from time of reservation, unless your booking is travelling within 3 days. For any other cancelations please refer to the cancelation policy that is clearly displayed before your booking is confirmed, on your confirmation and also available on the website under terms and conditions.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>How do I change/edit a reservation?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                For name and address amendments, you can edit your reservation from your booking confirmation by clicking edit booking, for any date changes please contact your agent.  Refer to the "Contact Us" page for contact information.  Date and resort changes are subject to availability. Cancelation and amendment charges may apply.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>How do I receive confirmation of my reservation?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{display: 'block'}}>
                Once your booking is completed you will receive a confirmation via email. Upon receipt, please review to ensure that all information is correct and print your confirmation as this can assist you with the check in process.<br></br><br></br>If you have noticed incorrect information or you have not received your confirmation via email please contact your agent.  Refer to the "Contact Us" page for contact information. 
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>Can I just make a deposit or must I pre-pay for the entire trip?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                All reservations must be pre-paid. Reservations must be booked with a major credit card. A debit/check card with a major credit card company is not an eligible form of payment for booking a reservation.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>Will taxes or other fees be charged to my account at the resort?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                Additional fees for housekeeping, amenities and deposits may apply and will vary by resort, these fee will be charged at time of check-in. Please refer to the current "resort news" or on your confirmation email where these will be clearly stated.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>What are the kitchen definitions described within the resort pages and search results?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{display: 'block'}}>
                <b>Partial Kitchen</b> - Installed with basic accessories for cooking such as microwave, bread toaster and coffee machine.<br></br><br></br><b>Complete Kitchen</b> - Installed with appliances usually found in a conventional kitchen such as a standard refrigerator, sink, conventional oven, microwave oven and coffee maker.<br></br><br></br><b>Mini Kitchen</b> - Installed with basic accessories that can be found in a complete kitchen, although they can be smaller than the standard size.<br></br><br></br><b>None</b> - Some hotels and studios may have no kitchen facilities available and are Room Only.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>Do children and infants count towards the occupancy within the condo?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                Yes. Occupancy includes children and infants within the traveling party. It is crucial that you do not exceed the maximum occupancy and failure to do so could result in refusal to check you in.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>Can I add more people to those specified on my reservation?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                Yes, as long as you don't exceed maximum occupancy level for your condo. Should your total number in your party exceed the allowable size please contact your customer service representative to see if a larger or second condo is available to accommodate you.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>Can I change the travel dates specified on my reservation?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                No, all reservations are final and cannot be changed. 
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>What are the different apartment sizes available?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{display: 'block'}}>
                Hotel Unit / Studio – A room that does not have a separate bedroom area, usually these room types typically sleep a maximum of 2 to 4 people.<br></br><br></br>1, 2 or 3+ Bedrooms – Rooms with greater capacity, where they can sleep between 4 to 8 people.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>What is the "Know Before You Go" information and why is it so important?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                The "Know Before You Go" information is there to help guide you to enable you to chose the best resort suitable to your holiday requirements. This advises of any resort updates (for example construction work and pool closures), charges and rules for that particular property (for example minimum age requirement, local fees payable and checking in and out times). We ask that all "Know Before You Go" information is read and understood to avoid disappointment and surprises at check in and during your stay.
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <b>How much and where do I pay the All Inclusive fees?</b>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                All Inclusive fees and information are displayed on the Resort Information page and again in the Payment Information section of the Booking page.  All Inclusive fees are paid to the resort at the time of check-in. 
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </CenterContainer>
        <br></br>
        <br></br>
        <br></br>
        <Footer></Footer>
    </React.Fragment>
)

export default AboutUs

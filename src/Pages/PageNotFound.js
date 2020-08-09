import React from 'react'
import Header from '../Components/Header.js' 
import Footer from '../Components/Footer.js'
import PageTitle from '../Components/PageTitle';
import CenterContainer from '../Components/CenterContainer';

const PageNotFound= () => {
    return (
        <React.Fragment>
            <Header />
            <PageTitle>PageNotFound?</PageTitle>
            <br />
            <CenterContainer> Unfortunately, you have reached a page that is not valid, or no longer exists. </CenterContainer>
            <br />
            <Footer />
        </React.Fragment>
    )
}

export default PageNotFound;
import React from 'react';
import CenterContainer from './CenterContainer';
import Loader from 'react-loader-spinner';



const Loading = () =>{

    return(
       <React.Fragment>
           <CenterContainer>
                <Loader type="Oval" color="Red" height="100" width="100" />
           </CenterContainer>
       </React.Fragment>

    )
}

export default Loading;
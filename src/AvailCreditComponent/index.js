import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';
import OuterContainer from '../OuterContainer';
import Footer from '../Footer';

class AvailCreditComponent extends Component{

    render(){
        return(
            <OuterContainer>
            <Footer />
        </OuterContainer>
        )
    }
}

export default withRouter(AvailCreditComponent);
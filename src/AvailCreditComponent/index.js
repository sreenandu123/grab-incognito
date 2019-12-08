import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';
import OuterContainer from '../OuterContainer';

class AvailCreditComponent extends Component{

    render(){
        const {location} = this.props;
        return(
            <OuterContainer header={location.state && location.state.header} footer={true}>
        </OuterContainer>
        )
    }
}

export default withRouter(AvailCreditComponent);
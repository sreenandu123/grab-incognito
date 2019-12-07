import React, {Component} from 'react';
import OuterContainer from '../OuterContainer';
import Footer from '../Footer';
import {withRouter} from 'react-router-dom';

class SignedInComponent extends Component{
    render(){
        const {location} = this.props;
        return(
            <OuterContainer header={location.state && location.state.header}>
                <Footer />
            </OuterContainer>
        )
    }
}

export default withRouter(SignedInComponent);
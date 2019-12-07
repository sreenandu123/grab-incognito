import React, {Component} from 'react';
import OuterContainer from '../OuterContainer';
import Footer from '../Footer';
import {withRouter} from 'react-router-dom';
import {creditEligibilityMapper} from "../globalContainer/utils";
import "./index.scss";

class SignedInComponent extends Component{
    render(){
        const {location} = this.props;
        console.log("asd", creditEligibilityMapper, location.state)
        return(
            <OuterContainer header={location.state && location.state.header}>
                <div className='e2-bucket '>Credit Eligibilty - {creditEligibilityMapper[location.state.bucket] || ''}</div>
                <div className='e2-bucket '>Credit Score - {location.state.credit_score || ''}</div>
                
                <Footer />
            </OuterContainer>
        )
    }
}

export default withRouter(SignedInComponent);
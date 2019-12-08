import React, {Component} from 'react';
import OuterContainer from '../OuterContainer';
import {withRouter} from 'react-router-dom';
import {creditEligibilityMapper} from "../globalContainer/utils";
import "./index.scss";

class SignedInComponent extends Component{

    constructor (props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        const {state} = this.props.location;
        if(state){
            Object.keys(state).forEach(item => {
                localStorage.setItem(item, state[item])
                this.handleStateChange(item, state[item])
            })
        }
    }

    handleStateChange = (key, e) => {
        this.setState({
            [key]: e
        })
    }

    render(){
        const {location} = this.props;
        return(
            <OuterContainer header={location.state && location.state.header} footer={true}>
                <div className='e2-bucket '>Credit Eligibilty - {creditEligibilityMapper[this.state.bucket || localStorage.bucket] || ''}</div>
                <div className='e2-bucket '>Credit Score - {this.state.credit_score || localStorage.credit_score || ''}</div>
            </OuterContainer>
        )
    }
}

export default withRouter(SignedInComponent);
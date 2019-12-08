import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';
import OuterContainer from '../OuterContainer';
import { TextField, Button } from '@material-ui/core';
import {profileData} from "../globalContainer/utils";
import "./index.scss";

class UserComponent extends Component{

    constructor(){
        super();
        this.state={};
    }

    handleStateChange =(key, value) => {
        this.setState({
            [key]: value
        })
    }

    render(){
        const {location} = this.props;
        console.log("localstorage", localStorage);
        return(
            <OuterContainer header={location.state && location.state.header} footer={true}>
                <div className='profile-component'>
                {profileData.map(item => <div key={item.key} className='e2-bucket ta-left'>{item.header} <span>:</span> {localStorage[item.key]} </div>)}
                {localStorage.bucket!=='NE' ? <div className='refer'><span className='refer-friends'>Refer your friends {localStorage.referral_code} and earn free credits</span><TextField id="standard-basic" label="Email id" onChange={(e) => this.handleStateChange('email', e.target.value)}/><Button className='submit-button' variant="contained" color="primary" onClick={this.handleBtnClick}>Share</Button></div>: null }
                </div>
        </OuterContainer>
        )
    }
}

export default withRouter(UserComponent);
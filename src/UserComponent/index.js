import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';
import OuterContainer from '../OuterContainer';
import { TextField, Button } from '@material-ui/core';
import {profileData} from "../globalContainer/utils";
import axios from 'axios';
import {base_url} from "../globalContainer/utils";
import "./index.scss";

class UserComponent extends Component{

    constructor(){
        super();
        this.state={
            referral_text: false
        };
    }

    handleStateChange =(key, value) => {
        this.setState({
            [key]: value,
            referral_text: false
        })
    }

    handleSignOutClick =() => {
        localStorage.clear();
        this.props.history.push('/')
    }

    handleBtnClick =() => {
        this.setState({
            loading: true,
            error: false
        })
        const payload = {
            referral_code: localStorage.referral_code,
            from_email: localStorage.email_id,
            to_email: this.state.email
        }
       axios.post(`${base_url}/referral`,payload).then(resp => {
           this.setState({
               loading: false
           })
           if(resp.data.status){
            this.setState({
                referral_text: resp.data.text
            })
           }
        })
    }

    render(){
        const {location} = this.props;
        const {referral_text} = this.state
        return(
            <OuterContainer header={location.state && location.state.header} footer={true}>
                <div className='profile-component'>
                {profileData.map(item => <div key={item.key} className='e2-bucket ta-left'>{item.header} <span>:</span> {localStorage[item.key]} </div>)}
                {localStorage.bucket!=='NE' ? <div className='refer'><span className='refer-friends'>Refer your friends using code {localStorage.referral_code} and earn free credits</span><div>
                    <TextField id="standard-basic" label="Email id" onChange={(e) => this.handleStateChange('email', e.target.value)}/>
                    <Button className='submit-button' variant="contained" color="primary" onClick={this.handleBtnClick}>Share</Button>
                    </div>
                    </div>: null }
                    {referral_text ? <div>{referral_text}</div>:null}
                    <Button className='submit-button sign-out' variant="contained" color="secondary" onClick={this.handleSignOutClick}>Sign Out</Button>
                </div>
        </OuterContainer>
        )
    }
}

export default withRouter(UserComponent);
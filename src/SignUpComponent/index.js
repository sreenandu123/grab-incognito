import React, { Component } from 'react';
import OuterContainer from '../OuterContainer';
import {withRouter} from 'react-router-dom';
import { TextField, Select, MenuItem, InputLabel, Button, CircularProgress} from '@material-ui/core';
import { DatePicker } from "@material-ui/pickers";
import moment from 'moment';
import axios from 'axios';
import {base_url} from "../globalContainer/utils";
import "./index.scss";
import {genderOptions, maritalStatus, signUpPayloadKeys} from "../globalContainer/utils";


class SignUpComponent extends Component{

    constructor(){
        super();
        this.state= {
            loading: false,
            formData: {
                dob: moment(),
            },
            error: false
        }
    }

    handleStateChange = (key, value) => {
        this.setState({
            formData: {...this.state.formData, [key]: value, error: false}
        })
    }

    getPayload =() => {
        const {formData} = this.state;
        let payloadObj = {};
        signUpPayloadKeys.forEach(item => {
            payloadObj[item] = formData[item] || ''
        })
        payloadObj["lat"] = localStorage.lat || '';
        payloadObj["lng"] = localStorage.lng || '';
        return payloadObj;
    }

    handleSignUpSubmitClick =() => {
        this.setState({
            loading: true,
            error: false
        })
        const payload = this.getPayload();
       axios.post(`${base_url}/signup`,payload).then(resp => {
           this.setState({
               loading: false
           })
           if(resp.data.status){
               this.props.history.push({
                   pathname: '/home',
                   state: { ...resp.data.data, header: 'Home' }
                 })
           }else{
               this.setState({
                   error: resp.data.text
               })
           }
        })
    }

    checkValid =() => {
        const {formData} = this.state;
        const filteredItems = signUpPayloadKeys.filter(item=> !formData[item]);
        if(filteredItems.length===0 || (filteredItems.length===1 && filteredItems.includes('referral_code'))){
            return false;
        }
        return true;
    }

    
        render(){
            const {location} = this.props;
            const  {formData, loading, error} = this.state;
            return(
                <OuterContainer header={location.state && location.state.header}>
                    <form className='sign-up-component'>
                    <TextField className='w-100' id="standard-basic" label="Full Name" onChange={(e) => this.handleStateChange('full_name', e.target.value)}/>
                    <DatePicker className='date-picker w-100' disableFuture openTo="year" format="LLL" label="Date of birth" views={["year", "month", "date"]} value={formData.dob} onChange={(e)=>this.handleStateChange('dob', moment(e).valueOf())} />
                    <TextField className='w-100' id="standard-basic" label="Phone Number" onChange={(e) => this.handleStateChange('phone_number', e.target.value)}/>
                    <InputLabel className='w-100 gender' id="demo-simple-select-placeholder-label-label">Gender</InputLabel>
                    <Select className='w-100' labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" onChange={(e) => this.handleStateChange('gender', e.target.value)} placeholder='Select gender' >
                     {genderOptions.map(item => <MenuItem key={item.label} value={item.value}>{item.label}</MenuItem>)}
                    </Select>
                    <InputLabel className='w-100 gender' id="demo-simple-select-placeholder-label-label">Marital Status</InputLabel>
                    <Select className='w-100' labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" onChange={(e) => this.handleStateChange('marital_status', e.target.value)} placeholder='Select marital Status' >
                     {maritalStatus.map(item => <MenuItem key={item.label} value={item.value}>{item.label}</MenuItem>)}
                    </Select>
                    {/* <TextField className='w-100' id="standard-basic" label="Address" onChange={(e) => this.handleStateChange('address', e.target.value)} /> */}
                    <TextField className='w-100' id="standard-basic" label="Email Id" onChange={(e) => this.handleStateChange('email_id', e.target.value)}/>
                    <TextField className='w-100' id="standard-basic" label="Password" type='password' onChange={(e) => this.handleStateChange('password', e.target.value)}/>
                    <TextField className='w-100' id="standard-basic" label="Referral Code (Optional)" onChange={(e) => this.handleStateChange('referral_code', e.target.value)}/>
                    
                    <Button className='submit-button' disabled={this.checkValid()} variant="contained" color="primary" onClick={() =>this.handleSignUpSubmitClick()}>Submit</Button>
                    {loading ? <span className='loader'> <CircularProgress/></span>: null}
                    {error ? <span className='error-msg'>{error}</span>: null}
                    </form>
                </OuterContainer>
            )
        }
}

export default withRouter(SignUpComponent);
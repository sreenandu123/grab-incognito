import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';
import OuterContainer from '../OuterContainer';
import axios from "axios";
import {base_url} from "../globalContainer/utils";
import { TextField, Button } from '@material-ui/core';
import "./index.scss";

class AvailCreditComponent extends Component{

    constructor(){
        super();
        this.state = {};
    }

    componentDidMount(){
        axios.get(`${base_url}/avail_credit?email_id=${localStorage.email_id}`).then(res => {
            localStorage.setItem('limit', res.data.limit);
            this.handleStateChange('limit', res.data.limit);
        })
    }

    handleStateChange = (key, e) => {
        this.setState({
            [key]: e
        })
    }

    checkValid = () => {
        const {credit_amount} = this.state;
        if(credit_amount && credit_amount<=localStorage.limit){
            return false;
        }   
        return true;
    }

    handleBtnClick =() => {
        this.setState({
            loading: true,
            error: false
        })
        const payload = {
            credit_amount: this.state.credit_amount,
            email_id: localStorage.email_id
        }
       axios.post(`${base_url}/avail_credit`,payload).then(resp => {
           this.setState({
               loading: false
           })
               this.props.history.push({
                   pathname: '/home'
                 })
        })
    }

    render(){
        const {location} = this.props;
        return(
            <OuterContainer header={location.state && location.state.header} footer={true}>
                <div className='avail-credit-component'>
                <div className='e2-bucket '>Credit limit - {localStorage.limit || 0}</div>
                <TextField className='credit_amount' id="standard-basic" label="Enter amount" onChange={(e) => this.handleStateChange('credit_amount', e.target.value)}/>
                <Button className='submit-button' variant="contained" color="primary" disabled={this.checkValid()} onClick={this.handleBtnClick}>Avail Credit</Button>
                </div>
        </OuterContainer>
        )
    }
}

export default withRouter(AvailCreditComponent);
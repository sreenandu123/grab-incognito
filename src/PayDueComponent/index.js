import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';
import OuterContainer from '../OuterContainer';
import axios from "axios";
import {base_url} from "../globalContainer/utils";
import { TextField, Button } from '@material-ui/core';
import "./index.scss";
import moment from "moment";

class PayDuesComponent extends Component{

    constructor(){
        super();
        this.state = {};
    }

    componentDidMount(){
        axios.get(`${base_url}/pay_dues?email_id=${localStorage.email_id}`).then(res => {
            localStorage.setItem('due_amount', res.data.due_amount)
            localStorage.setItem('due_time', moment(res.data.due_time));
            this.handleStateChange('due_amount', res.data.due_amount)
            this.handleStateChange('due_time', res.data.due_time)
        })
    }

    handleStateChange = (key, e) => {
        this.setState({
            [key]: e
        })
    }

    checkValid = () => {
        const {payment} = this.state;
        console.log("asd",  payment, this.state)
        if(Number(payment) && Number(payment)<=Number(this.state.due_amount)){
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
            payment: this.state.payment,
            email_id: localStorage.email_id
        }
       axios.post(`${base_url}/pay_dues`,payload).then(resp => {
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
        const {due_amount, due_time}= this.state;
        return(
            <OuterContainer header={location.state && location.state.header} footer={true}>
                <div className='avail-credit-component'>
                <div className='e2-bucket '>Due Amount - {due_amount || 0}</div>
                <div className='e2-bucket '>Due Time - {moment(due_time).format('LL') || ''}</div>
                
                <TextField className='credit_amount' id="standard-basic" label="Enter amount" onChange={(e) => this.handleStateChange('payment', e.target.value)} autoComplete={'off'}/>

                <Button className='submit-button' variant="contained" color="primary" disabled={this.checkValid()} onClick={this.handleBtnClick}>Pay Due</Button>
                </div>
        </OuterContainer>
        )
    }
}

export default withRouter(PayDuesComponent);
import React, {Component} from 'react';
import "./grabMobileComponent.scss";
import { TextField, Button, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import OuterContainer from "../OuterContainer";
import {base_url} from "../globalContainer/utils";

class GrabMobileComponent extends Component{

    constructor(){
        super();
        this.state ={
            loading: false
        }
        navigator.geolocation.getCurrentPosition(this.geoSuccess);
    }

     geoSuccess = (position) => {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        console.log(lat, lng)
        localStorage.setItem('lat', lat);
        localStorage.setItem('lng', lng);
    }

    handleStateChange = (key, e) => {
        this.setState({
            [key]: e
        })
    }

    handleBtnClick = () => {
        this.setState({
            loading: true
        })
        const payload = {
            email: this.state.email,
            password: this.state.password
        }
        localStorage.setItem('email', this.state.email);
       axios.post(`${base_url}/signin`,payload).then(resp => {
              this.props.history.push({
                  pathname: '/home',
                  state: { ...resp.data, header: 'Home' }
                })
            })
         }

         handleSignUpUserClick = () => {
             this.props.history.push({
                 pathname: '/signup',
                 state: {header: 'Sign Up Form'}
             })
         }

    render(){
        const {loading} = this.state;
        return(
            <OuterContainer>
                    {!loading && <form className='form-data'>
                    <TextField id="standard-basic" label="Email id" onChange={(e) => this.handleStateChange('email', e.target.value)}/>
                    <TextField id="standard-basic" type='password' label="password" onChange={(e) => this.handleStateChange('password', e.target.value)}/>
                    <Button className='submit-button' variant="contained" color="primary" onClick={this.handleBtnClick}>Sign In</Button>
                    <div className='new-user-text'>Dont have an account? <span className='sign-up' onClick={this.handleSignUpUserClick}>Sign Up</span></div>
                    </form>}
                    <div className='loader'>
                    {loading ? <CircularProgress/>:null}
                    </div>
                    </OuterContainer>
        )
    }
}

export default GrabMobileComponent;
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
    }

    handleStateChange = (key, e) => {
        this.setState({
            [key]: e
        })
    }

    handleBtnClick = () => {
        console.log("reached here")
        this.setState({
            loading: true
        })
        const payload = {
            email: this.state.email
        }
        localStorage.setItem('email', this.state.email);
       const response = axios.post(`${base_url}/signin`,payload).then(resp => {
              this.props.history.push({
                  pathname: '/home',
                  state: { detail: response.data }
                })
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
                    </form>}
                    <div className='loader'>
                    {loading ? <CircularProgress/>:null}
                    </div>
                    </OuterContainer>
        )
    }
}

export default GrabMobileComponent;
import React, {Component} from 'react';
import "./grabMobileComponent.scss";
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

class GrabMobileComponent extends Component{

    constructor(){
        super();
        this.state ={
            
        }
    }

    handleStateChange = (key, e) => {
        this.setState({
            [key]: e.target.value
        })
    }

    handleBtnClick = () => {
        console.log("reached here")
        const payload = {
            email: this.state.email
        }
        localStorage.setItem('email', this.state.email);
       const response = axios.post('http://localhost:3050/signin',payload).then(resp => {
              this.props.history.push('/signin')
            })

            console.log("asd", localStorage);
            
         }

    render(){
        return(
            <div className='grab-outer-container'>
                <div className='inner-container'>
                    <form className='form-data'>
                    <TextField id="standard-basic" label="Email id" onChange={(e) => this.handleStateChange('email', e)} autoComplete='off'/>
                    <TextField id="standard-basic" type='password' label="password" onChange={(e) => this.handleStateChange('password', e)} autoComplete='off'/>
                    <Button className='submit-button' variant="contained" color="primary" onClick={this.handleBtnClick}>Sign In</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default GrabMobileComponent;
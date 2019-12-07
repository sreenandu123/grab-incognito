import React, {Component} from 'react';
import OuterContainer from '../OuterContainer';
import Footer from '../Footer';
import {withRouter} from 'react-router-dom';

class SignedInComponent extends Component{
    render(){
        return(
            <OuterContainer >
                <Footer />
            </OuterContainer>
        )
    }
}

export default withRouter(SignedInComponent);
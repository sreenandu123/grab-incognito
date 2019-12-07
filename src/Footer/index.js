import React, { Component } from 'react';

import {footerIconOptions} from "../globalContainer/utils"
import {withRouter} from 'react-router-dom';

class Footer extends Component{

    handleClick = (data) => {
        this.props.history.push({
            pathname : data.url,
            state: data
        })
    }
    render(){
        return(
               <div className='footer'>
                        {footerIconOptions.map(item => <img key={item.imageIcon} src={require(`../images/${item.imageIcon}`)} alt='NA' onClick={() => this.handleClick(item)}/>)}
                        </div>
        )
    }
}

export default withRouter(Footer);
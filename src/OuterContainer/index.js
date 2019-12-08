import React from 'react';
import "./index.scss"
import Footer from '../Footer';

const OuterContainer = (props) => {
    return (
        <div className='grab-outer-container'>
                <div className='inner-container'>
                    <header className='header'>
                        {props.header || 'Grab Fintech'}
                    </header>
                    <div className='body'>
                    {props.children}
                    </div>
                    {props.footer && <Footer />}
                </div>
            </div>
    )
}

export default OuterContainer
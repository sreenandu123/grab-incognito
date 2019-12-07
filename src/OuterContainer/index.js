import React from 'react';
import "./index.scss"

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
                </div>
            </div>
    )
}

export default OuterContainer
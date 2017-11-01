import React from 'react';
import './Button.css';
import './ButtonPressed.css';

const Button = props => {
    return (
        <div className='container'>
            <div className='outer-btn p-absolute'>
            </div>
            <div className='chill-btn p-absolute'>
                <div className='inner-chill p-absolute'>
                    <img className='chill-logo' src='./chill-logo.png' alt='chill logo'/>
                </div>
            </div>
        </div>
    );
}

export default Button;

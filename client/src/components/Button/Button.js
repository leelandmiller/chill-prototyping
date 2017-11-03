import React from 'react';
import classnames from 'classnames';
import './Button.css';
import './ButtonPressed.css';

const Button = props => {

    const outerBtnClass = classnames({
        [`outer-btn${props.pressedState ? '-pressed' : ''}`]: true,
        'p-absolute': true
    });

    const chillBtnClass = classnames({
        [`chill-btn${props.pressedState ? '-pressed' : ''}`]: true,
        'p-absolute': true
    });

    const innerChillClass = classnames({
        [`inner-chill${props.pressedState ? '-pressed' : ''}`]: true,
        'p-absolute': true
    });

    const chillLogoClass = classnames({
        [`chill-logo${props.pressedState ? '-pressed' : ''}`]: true,
    });

    return (
        <div className='container'>
            <div onClick={props.press} className='btn'>
                <div className={outerBtnClass}>
                </div>
                <div className={chillBtnClass}>
                    <div className={innerChillClass}>
                        <img className={chillLogoClass} src='./chill-logo.png' alt='chill logo'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Button;

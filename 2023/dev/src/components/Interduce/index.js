import React, { PureComponent } from 'react';
import ActionButton from '../ActionButton';
import './styles.css';

export default class InterduceView extends PureComponent {
    constructor() {
        super()

        this.state = {
            toggle: false
        }
    }
    render() {
        return (
            <div className='interduce'>
                <div className='inerduce-container'>
                    <div className='interduce-content-container'>
                        <div className='interduce-content-top'>
                            Hey 👋 <br /> Time to Plan a Trip to Taipei this November!
                        </div>
                        <div className='interduce-content-mid'>
                            Sign up now for exclusive access to <br /> early bird ticket sales.
                        </div>
                        <div className='interduce-signup-bottom'>
                            <ActionButton title="SIGNUP NOW" link="https://bit.ly/iplayground-2020-sponsors" />
                        </div>
                    </div>
                    <div className='interduce-image-container'></div>
                </div>
            </div>
        )
    }
}
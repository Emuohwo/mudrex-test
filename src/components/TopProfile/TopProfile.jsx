import React from 'react'
import RegisterStepper from '../RegisterStepper/RegisterStepper';
import "./topProfile.css";

function TopProfile() {
    return (
        <div className='topProfile'>
            <div className="nameSetupContainer">
                <h2 className="profileName">Hi, asinghal1997 ICON</h2>
                <h4 className="setupTitle">Become investment ready</h4>
                <p className="setupDesc">
                    You are just 2 steps away from setting up your account to start
                    investing in Mudrex.
                </p>
                <div className="setButtonContainer">
                    <button className="setupBtn">Complete setup</button>
                </div>
            </div>
            <div className="setupStepperContainer">
                <RegisterStepper />
            </div>
        </div>
    )
}

export default TopProfile

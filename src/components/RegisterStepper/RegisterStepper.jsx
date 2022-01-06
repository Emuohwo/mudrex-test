import * as React from 'react';
import "./registerStepper.css"
import { MdCheckCircle, MdOutlineBrightness1 } from "react-icons/md";

export default function RegisterStepper() {
  return (
    <div>
        <div className="stepperWrapper">
            <div className="stepperLeft">
                <div className="iconLineContainer">
                    <span className="iconBox active">
                        <MdCheckCircle />
                    </span>
                    <span className="lineBox"></span>
                </div>
                <div className="stepperContent">
                    <p className="stepperText">
                        Create your account
                    </p>
                </div>
            </div>
            <div className="stepperMiddle">
                <div className="iconLineContainer">
                    <span className="iconBox active">
                        <MdOutlineBrightness1 />
                    </span>
                    <span className="lineBox"></span>
                </div>
                <div className="stepperContent">
                    <p className="stepperText active">
                        Deposit crypto or
                        connect exchange
                    </p>
                </div>
            </div>
            <div className="stepperRight">
                <div className="iconLineContainer">
                    <span className="iconBox active">
                        <MdOutlineBrightness1 />
                    </span>
                    {/* <span className="lineBox"></span> */}
                </div>
                <div className="stepperContent">
                    <p className="stepperText">
                        Create your account
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}
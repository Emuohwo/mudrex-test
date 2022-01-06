import React from 'react'
import "./pageHeader.css";
import { MdTableRows } from "react-icons/md";

function PageHeader() {
    return (
        <div className='pageHeader'>
            <div></div>
            <div className="centerLink">Home</div>
            <div className="rightLinks">
                <div className="walletWrapper">
                    <span className="icon">
                      <MdTableRows size={20} />
                    </span>
                    <span>Wallet</span>
                    
                </div>
                <div className="profileIndicator">
                    <span>A</span>
                </div>
            </div>
        </div>
    )
}

export default PageHeader

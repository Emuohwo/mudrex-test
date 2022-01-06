import React from 'react'
import "./exploreCoins.css"
import { FaRocketchat } from "react-icons/fa";

function ExploreCoins() {
    return (
        <div className="exploreCoins">

            <div className="exploreCoinsWrapper">
                <h3 className="exploreTitle">Explore Coins Sets</h3>
                <p className="exploreCoinsDesc">
                    Coins Sets are baskets of crypto tokens based on a theme.
                    Invest in ideas that you believe in, and grow your wealth
                    in the long run.
                </p>
                <div className="exploreCoinsTabsBox">
                    <div className="exploreCoinItem">
                        <span className="coinItem active">Mudrex Spot</span>
                    </div>
                    <div className="exploreCoinItem">
                        <span className="coinItem">Binance</span>
                    </div>
                    <div className="exploreCoinItem">
                        <span className="coinItem">Binance US</span>
                    </div>
                    <div className="exploreCoinItem">
                        <span className="coinItem">Coinbase Pro</span>
                    </div>
                    <div className="exploreCoinItem">
                        <span className="coinItem">OKEX</span>
                    </div>
                    <div className="exploreCoinItem">
                        <span className="coinItem">FTX</span>
                    </div>
                </div>
            </div>

            <div className="helpContainer">
                <div className="helpContent">
                    <FaRocketchat />
                    <span className="help">Help</span>
                </div>
            </div>

        </div>
    )
}

export default ExploreCoins

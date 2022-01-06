import React from 'react'
import { MdArrowDropUp } from 'react-icons/md'
import "./investment.css"

function Investment() {
    return (
        <div className='investment'>
            <div className="investmentContainer">
                <div className="investmentSummary">

                    <div className="summaryTopSection">

                        <div className="statusIcon"></div>

                        <h3 className="summaryTitle">Investment Summary</h3>
                        <div className="summaryValueContainer">
                            <div className="currentValueWrapper">
                                <p className="valueTitle">Current Value</p>
                                <div className="currentValueContent">

                                    <h2 className="currentValue">
                                        $0 
                                    </h2>
                                    <span className="valueIndicator">
                                        <MdArrowDropUp size={20} className='indicatorIcon' />
                                        <span>0% ($0)</span>
                                    </span>
                                </div>
                            </div>
                            <div className="investedValueWrapper">
                            <p className="valueTitle">Invested Value</p>
                            <h4 className="cureentValue">$0 </h4>
                            </div>
                        </div>
                    </div>

                    <div className="summaryBottomSection">

                        <div className="currencyHealthWrapper">
                            <div className="currencyContainer">
                                <div className="currencyIconBox">
                                    <img 
                                      src="https://imgr.search.brave.com/us1kVrh8AnET7aPbexg_jODVB3s5UPOWuuX0C4O2Hlc/fit/512/512/ce/1/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYml0Y29pbi1j/cnlwdG9jdXJyZW5j/eS1sYXZlbmRlci12/b2wtMS0xLzUxMi9h/cmRvci01MTIucG5n"
                                      alt="" 
                                      className='currencyIcon'
                                    />
                                </div>
                                <div className="currencyDetails">
                                    <h5 className="currencyTitle">Coin Sets</h5>
                                    <div className="currencyValueBox">
                                        <h3 className="currencyPrice">$0</h3>
                                        <div className="currencyIndicatorBox">
                                            <MdArrowDropUp />
                                            <span className="currencyRate">0%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="currencyHealthWrapper">
                            <div className="currencyContainer">
                                <div className="currencyIconBox">
                                    <img 
                                      src="https://imgr.search.brave.com/us1kVrh8AnET7aPbexg_jODVB3s5UPOWuuX0C4O2Hlc/fit/512/512/ce/1/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYml0Y29pbi1j/cnlwdG9jdXJyZW5j/eS1sYXZlbmRlci12/b2wtMS0xLzUxMi9h/cmRvci01MTIucG5n"
                                      alt="" 
                                      className='currencyIcon'
                                    />
                                </div>
                                <div className="currencyDetails">
                                    <h5 className="currencyTitle">Algos</h5>
                                    <div className="currencyValueBox">
                                        <h3 className="currencyPrice">$0</h3>
                                        <div className="currencyIndicatorBox">
                                            <MdArrowDropUp />
                                            <span className="currencyRate">0%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="portfolioSection">
                    <h3 className="adsTitle">Not sure where to invest?</h3>
                    <p className="adsDesc">
                        Crypto is confusing, we do understand you. Answer a few questions to
                        to find the best investment strategy for you.
                    </p>
                    <div className="adsButtonContainer">
                        <button className="adsBtn">Find your ideal portfolio</button>
                        <p className="adsTime">Takes -5 min</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Investment

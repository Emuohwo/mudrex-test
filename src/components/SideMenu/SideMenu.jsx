import "./sideMenu.css";
import logo from "../../logo.svg";
import { MdHome, MdFeed, MdSupervisorAccount, MdLightbulb, MdHeadsetMic, MdCallMade, MdAttachMoney, MdOutlineTv } from "react-icons/md";

function SideMenu() {
    return (
        <div className='sideMenu'>

            <div className="logoWrapper">
                <div className="logoTextBox">
                    <img src={logo} className="logoImg" alt="" />
                    <span className="logoName">MUDREX</span>
                </div>
            </div>

            <div className="navigationContainer">
                <>
                <div className="navLinkWrapper active">
                    <span className="navIcon">
                        <MdHome  />
                    </span>
                    <span to="/" className="navLink">Home</span>
                </div>
                <div className="navLinkWrapper">
                    <span className="navIcon">
                        <MdCallMade />
                    </span>
                    <span to="/" className="navLink">Invest</span>
                </div>
                <div className="navLinkWrapper">
                    <span className="navIcon">
                        <MdLightbulb />
                    </span>
                    <span to="/" className="navLink">Build</span>
                </div>
                <div className="navLinkWrapper">
                    <span className="navIcon">
                        <MdAttachMoney />
                    </span>
                    <span to="/" className="navLink">Monetize</span>
                </div>
                <div className="navLinkWrapper">
                    <span className="navIcon">
                        <MdFeed />
                    </span>
                    <span to="/" className="navLink">Order History</span>
                </div>
                </>

                <div className="divider"></div>

                <div className="minorNavbox">
                    
                    <div className="navLinkWrapper">
                        <span className="navIcon">
                            <MdSupervisorAccount />
                        </span>
                        <span to="/" className="navLink">Referral</span>
                    </div>
                    <div className="navLinkWrapper">
                        <span className="navIcon">
                            <MdHeadsetMic />
                        </span>
                        <span to="/" className="navLink">Support</span>
                    </div>

                </div>

            </div>

            {/* <div className="spaceSeparator"></div> */}

            <div className="webinarWrapper">
                <p>
                <MdOutlineTv size={20} />
                    Join Webinar to using Mudrex. Register now
                </p>
            </div>

        </div>
    )
}

export default SideMenu;


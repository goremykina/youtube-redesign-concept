import  '../../../../css/styles.css';
import menu from "../../../../icons/menu.svg";
import logoIcon from "../../../../icons/logo.png";
import search from "../../../../icons/search.svg";
import phone from "../../../../icons/phone-18.svg";
import view from "../../../../icons/view.svg";
import notifications from "../../../../icons/notification.svg";
import userIcon from "../../../../icons/userIcon.png";


export default function Header() {
    return (
        <header>
            <div className="header-container header-home-padding">
                <div className="header-wrapper">
                    <div className="logo">
                        <button className="primary_btn" type="button">
                            <img src={menu} alt="menu"/>
                        </button>
                        <button className="primary_btn mob-logo" type="button">
                            <img src={logoIcon} alt="logo"/>
                        </button>
                    </div>
                    <div className="search">
                        <form className="search">
                            <input type="text" className="search__input" placeholder="Search"/>
                            <button className="search-btn mob-logo" type="button">
                                <img className="mob-logo" src={search} alt="search"/>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="user">
                    <button className="primary_btn" type="button">
                        <img src={phone} alt="phone"/>
                    </button>
                    <button className="primary_btn" type="button">
                        <img src={view} alt="view"/>
                    </button>
                    <button className="primary_btn" type="button">
                        <img src={notifications} alt="notification"/>
                    </button>
                    <button className="primary_btn icon-user" type="button">
                        <img src={userIcon} alt="user"/>
                    </button>
                </div>
            </div>
        </header>
    )
}
import menu from "/icon/menu.svg";
import logoIcon from "/icon/logo.png";
import search from "/icon/search.svg";
import phone from "/icon/phone-18.svg";
import view from "/icon/view.svg";
import notifications from "/icon/notification.svg";
import userIcon from "/icon/userIcon.png";
import  './styles.css';


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
                        <span className="notification-icon">
                            <img src={notifications} alt="notification"/>
                        </span>
                    </button>
                    <button className="primary_btn icon-user" type="button">
                        <img src={userIcon} alt="user"/>
                    </button>
                </div>
            </div>
        </header>
    )
}
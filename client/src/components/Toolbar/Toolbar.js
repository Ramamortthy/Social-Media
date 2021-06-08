import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faHome, faVideo, faPoll, faUsers, faGamepad } from '@fortawesome/free-solid-svg-icons';
// import { animateScroll as scroll } from "react-scroll";
// import { Redirect } from 'react-router-dom'
// import theme from 'styled-theming';
// import { useTheme } from '../UI/ThemeContext';
// import * as actions from '../../store/actions/index'
import './Toolbar.css'
import Search from '../UI/Search/Search'
import Profile from './DropDowns/Profile/Profile'
import Create from './DropDowns/Create/Create'
import Messenger from './DropDowns/Messenger/Messenger'
import Notification from './DropDowns/Notification/Notification'

const Toolbar = props => {
    // const {  userid, token } = props
    // useEffect(() => {
    //     onFetchBag(userid, token)
    //     onFetchWishlist(userid, token)
    // }, [Bag.length, wishlist.length, userid, onFetchBag, onFetchWishlist, token])

    // const themeToggle = useTheme();
    // const scrollToBottom1 = () => {
    //     scroll.scrollToBottom();
    // }

    return (
        <div className="Toolbarcontainer">
            <div className="headertodo">
                <div className="iconplussearch">
                    <Link to={'/'} className="toolbarTitle"><FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faFire} /></Link>
                    <div className="DesktopSearch">
                        <Search />
                    </div>
                </div>
                <div className="controls">
                    <NavLink to={'/home'} className="control" activeClassName="activecontrol">
                        <div className="upbarcontrol"></div>
                        <div className="iconcontrol">
                            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faHome} />
                        </div>
                        <div className="downbarcontrol"></div>
                    </NavLink>
                    <NavLink to={'/home/video'} className="control" activeClassName="activecontrol">
                        <div className="upbarcontrol"></div>
                        <div className="iconcontrol">
                            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faVideo} />
                        </div>
                        <div className="downbarcontrol"></div>
                    </NavLink>
                    <NavLink to={'/home/marketplace'} className="control" activeClassName="activecontrol">
                        <div className="upbarcontrol"></div>
                        <div className="iconcontrol">
                            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faPoll} />
                        </div>
                        <div className="downbarcontrol"></div>
                    </NavLink>
                    <NavLink to={'/home/groups'} className="control" activeClassName="activecontrol">
                        <div className="upbarcontrol"></div>
                        <div className="iconcontrol">
                            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faUsers} />
                        </div>
                        <div className="downbarcontrol"></div>
                    </NavLink>
                    <NavLink to={'/home/games'} className="control" activeClassName="activecontrol">
                        <div className="upbarcontrol"></div>
                        <div className="iconcontrol">
                            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faGamepad} />
                        </div>
                        <div className="downbarcontrol"></div>
                    </NavLink>
                </div>
                <div className="profileandbag">
                    <div className="profiledpandname">
                        <img src={props.image} alt="dp" />
                        <p>{props.username && props.username.split(" ")[0]}</p>
                    </div>
                    <Create />
                    <Messenger />
                    <Notification />
                    <Profile />
                </div>
            </div>
            <div className="mobileSearch">
                <Search />
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        userid: state.auth.userid,
        username: state.auth.username,
        token: state.auth.token,
        image: state.auth.image
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => (dispatch({ type: "LOGOUT" }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import './Messenger.css'

const Messenger = (props) => {
    const logoutclickedHandler = () => {
        props.onLogout()
    }

    return (
        <div>
            <div type="button" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <FontAwesomeIcon style={{ fontSize: "1rem", marginTop: "12px" }} icon={faFacebookMessenger} />
            </div>
            <div className="dropdown-menu">
                <div className="usernamewelcome">
                    <p ><strong>Welcome {props.username}</strong></p>
                    <button >
                        {!props.isAuthenticated ?
                            <Link style={{ backgroundColor: "#ff2058" }} className="dropdown-item" to="/">Log In</Link>
                            :
                            <Link style={{ backgroundColor: "#ff2058" }} onClick={logoutclickedHandler} className="dropdown-item" to="/logout">Log Out</Link>}
                    </button>
                </div>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/myorders">My Orders</Link>
                <Link className="dropdown-item" to="/checkout/bag">My Bag</Link>
                <Link className="dropdown-item" to="/checkout/wishlist">My Wishlist</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/">Gift cards</Link>
                <Link className="dropdown-item" to="/">Coupons</Link>
                <Link className="dropdown-item" to="/" >Contact Us</Link>
                <div className="dropdown-divider"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Messenger)

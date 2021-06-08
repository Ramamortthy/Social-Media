import React from 'react'
import { connect } from 'react-redux'

import './Card.css'


const Card = (props) => {
    return (
        <div className="Cardcontainer">
            <div className="Cardprofile">
                <div className="Cardprofiledp">
                    <img src={props.dp} alt="dp" />
                </div>
                <div className="Cardprofiledetail">
                    <strong>{props.name}</strong>
                    <p>{props.time}</p>
                </div>
            </div>
            <div className="Cardcaption">{props.caption}</div>
            <div className="Cardview">
                <img src={props.post} alt="pic" />
            </div>
            <div className="Cardlikes"></div>
            <div className="Cardcontrol">
                <button className="Cardcontrollike">Like</button>
                <button className="Cardcontrolshare">Share</button>
            </div>
            <div className="Cardcomment">
                    <div className="headerProfilePicture">
                        <div className="profiledp">
                            <img alt="dp" src={props.image} />
                        </div>
                    </div>
                    
                    <input className="commentsection" />
                    <div className="headerProfilePicture">
                        <button>-\</button>
                    </div>
        </div>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        image: state.auth.image
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
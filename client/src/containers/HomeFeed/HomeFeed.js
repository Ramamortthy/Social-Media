import React from 'react'
import { connect } from 'react-redux'

import './HomeFeed.css'
import Toolbar from '../../components/Toolbar/Toolbar'
import Left from '../../components/HomeFeed/left/left'
import Main from '../../components/HomeFeed/main/main'
import Right from '../../components/HomeFeed/right/right'

const Homefeed = (props) => {

    return (
        <div>
            <Toolbar />     
            <div className="leftmainright">
                <Left />     
                <Main />     
                <Right /> 
            </div>    
        </div>
    )
}

const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homefeed)
import React from 'react'

import './main.css'
import Card from '../../UI/Card/Card'


const Main = (props) => {
    return (
        <div className="maincontainer">
            <Card
                dp="https://images.unsplash.com/photo-1590756252677-8b92843273bf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
                name="Rahul"
                time="16 Nov at 6.22 pm"
                caption=""
                post="https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"/>
        </div>
    )
}

export default Main
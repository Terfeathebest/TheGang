import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import img from '../img/Untitled24.png'
import './navbar.css'

export default class Home extends Component {
    render() {
        return (
            <div style={{margin:'0 auto'}}>
                <img src={img} alt="img" className="smile"/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Card>
                    <Card.Header>
                        The Gang
                    </Card.Header>
                    <Card.Body>

                    </Card.Body>
                </Card>
            </div>
        )
    }
}

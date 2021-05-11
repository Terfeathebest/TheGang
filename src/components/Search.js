import React, { Component } from 'react'
import { Redirect } from 'react-router'
import {AiOutlineSearch} from 'react-icons/ai'
export default class Search extends Component {
    state = {
        search: ""
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value,
        });
    };
    render() {

        if(this.state.search === "about"){
            return(
                <Redirect to="/sx"/>
            )
        }
        return (
            <div className="row">
                <input
                    type="text"
                    style={{
                        width:'300px',
                        zIndex:'0 '
                    }}
                    name="search"
                    id="search"
                    placeholder="Search"
                    className="form-control form-control-lg input-block"
                    autocomplete="off"
                    spellCheck="true"
                    onChange={this.handleChange}
                    aria-describedby="input-check-3834 "
                    value={this.state.search}
                />
                <div className="circle" style={{}}><AiOutlineSearch/></div>
            </div>
        )
    }
}

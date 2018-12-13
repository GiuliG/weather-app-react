import React, { Component } from 'react';

class Form extends Component {
    render(){
        return (
            <form onSubmit = {this.props.getWeather}>
                <input type="text" name="city" placeholder="enter a city"/>
                <input type="text" name="country" placeholder="enter a country"/>
                <button >Submit</button>
            </form>
        )
    }
}

export default Form;
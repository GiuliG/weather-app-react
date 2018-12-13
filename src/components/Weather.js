import React, { Component } from 'react';

class Weather extends Component {
    render(){
        return (
            <div>
                { this.props.country && this.props.city &&  <p>city: {this.props.city}</p>}
                { this.props.country && this.props.city &&  <p>description: {this.props.description}</p>}
                { this.props.country && this.props.city && <p>temperature: {this.props.temperature}</p>}
                { this.props.error && <p>{this.props.error}</p>}
           
            </div>
        )
    }
}

export default Weather;
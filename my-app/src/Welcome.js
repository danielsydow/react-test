import React from 'react';

export default class Welcome extends React.Component{
    render(){
        return <h1>first component {this.props.firstname} {this.props.lastname}</h1>
    }
}
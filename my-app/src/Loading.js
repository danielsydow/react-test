import React from 'react';

export default class Loading extends React.Component{

    componentWillMount(){
        console.log('WILL MOUNT');

    }

    componentDidMount(){
        console.log('DID MOUNT');
        // Ajax Calls oder Initialisierung oder Setup

    }

    render(){
        console.log('RENDER');
        return <p>LOADING ........</p>
    }

    componentWillUnmount(){
        console.log('UNMOUNTING');
        // Speicherfreigeben/ Cleanup
    }
}
/*
* Componenten laufen durch verschiedene Phasen
* lifecycle Methoden
 */
import React from 'react';
import Loading from './Loading';
import Finish from './Finish';

export default class Project extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            projects:[],
            isLoading: true
        }

    setTimeout(() => {
        this.setState({ isLoading:false });
        },3000)
    }

    // Event Handling Übergabe
    loadProjects(foo, e){
        e.preventDefault();
        this.setState({projects:['ReactA','ReactB','ReactC']});
    }

    render(){
        const foo = 'bar';
        /* Key hinzugefügt
        * dient zur Identifizierung der Einträge
        */
        const ProjectComponents = this.state.projects.map(project => <li key={project}>{project}</li>);

        // Loading & Finish ausgelagert in einer Datei
        //return (<div><a href="#" onClick={this.loadProjects.bind(this)}>test</a></div>)
        return <div><ul>{ProjectComponents}</ul>{
            this.state.isLoading ? <Loading/> : <Finish/>}
            <a href="#" onClick={this.loadProjects.bind(this, foo)}>Lade Projekte</a>
        </div>}

}
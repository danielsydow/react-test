import React from 'react';

export default class Form extends React.Component{

    constructor(props){
        super(props);

        this.state = {
        name:'',
        description:'',
        type:'',
        }
    }

    handleChange(e){
        const target = e.target;
        const name = target.name;
        const value = target.type ==='checkbox' ? target.checked : target.value;

        this.setState({[name]:value});
    }

    render(){

        const {name, description, type} = this.state;

        return (
            <form>
                <label>Input Field</label>
                <input type="text" name="name" placeholder="Name" value={ name }/>
                <label>Textarea</label>
                <textarea name="description" placeholder="Beschreibung" value={ description } onChange={ this.handleChange.bind(this) }/>
                <label>Selectbox</label>
                <select name="type" value={ type } onChange={ this.handleChange.bind(this) }>
                    <option value="">Bitte Auswählen</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                </select>
            </form>
        );
    }
}
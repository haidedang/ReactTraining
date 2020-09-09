import React, { Component } from "react";


class Form extends React.Component {
    /* constructor(props) {
        super(props);

        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }
 */

 // state will not be persisted across page reload 
    initialState = {
        name: "",
        job:"",
    }

    state = this.initialState 

    handleChange = event =>  {
        const { name, value } = event.target;
        console.log(name, value); 
        this.setState({
            [name]:value
        })
    }

    submitForm= () => {
       this.props.handleSubmit(this.state); 
       this.setState(this.initialState) 
    }

    render() {
        const {name, job} = this.state; 
        return (
                
                // handleSubmit is the input variable! 
                // if it is put in form , the page will reload and state will be cleared
                <form>
                    <label htmlFor ="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor ="value"> Value</label>
                    <input 
                        type="text"
                        name="job"
                        id="job"
                        value={job}
                        onChange = {this.handleChange}
                    />
                    <input type = "button" value="Submit" onClick={this.submitForm} />
                </form>
        );
    }
}

export default Form;


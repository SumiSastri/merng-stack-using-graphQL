import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import FormInput from "../../../common-components/forms/FormInput"
import {getAuthorsQuery} from "../../../../utils/queries"
class AddBook extends Component { 
    constructor(props){
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        };
    }

    displayAuthors(){
        let data = this.props.data;
        if(data.loading){
            return( <option disabled>Loading authors please wait</option> );
        } else {
            return data.authors.map(author => {
                return( <option key={ author.id } value={author.id}>{ author.name }</option> );
            });
        }
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(this.state);
    }

    render(){
        console.log("AddBook props", this.props);
        return(
            <form id="add-book" onSubmit={ this.handleSubmit.bind(this) }>
      <h3>Add a book</h3>
                <FormInput
          className="inpt-1s"
          label="Book Name"
          name="name"
        onChange={ (e) => this.setState({ name: e.target.value }) } 
          />
          
        <FormInput
          className="inpt-1s"
          label="Genre"
          name="genre"
        onChange={ (e) => this.setState({ genre: e.target.value }) } 
          />  
                <div className="field">
                    <label>Author:</label>
                    <select  
                    name ="authorId" 
                    onChange={ (e) => this.setState({ authorId: e.target.value }) } 
                    >
                        <option>Select author</option>
                        { this.displayAuthors() }
                    </select>
                </div>
                <button>+</button>    
            </form>
        );
    }
}

export default graphql(getAuthorsQuery)(AddBook);
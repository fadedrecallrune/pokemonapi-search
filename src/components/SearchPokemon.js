import React, { Component } from "react";
import { Segment, Form, Input, Button } from "semantic-ui-react";
import axios from 'axios'
import { connect } from 'react-redux'

import { setPokemon } from '../actions'

class SearchPokemon extends Component {
  state = {
    pokemon: ""
  };

  search() {
      let {pokemon} = this.state;
    const url = `http://pokeapi.co/api/v2/pokemon/${pokemon}`;
    axios.get(url).then(response => {
      
        this.props.setPokemon(response.data)
        })
    }
    
  render() {
    return (
      <Segment>
        <h1 className='text'>Search</h1>
        <Form>
          <Form.Field>
            <Input
              focus
              size="huge"
              placeholder="enter pokemon name or id"
              onChange={event => this.setState({ pokemon: event.target.value })}
            >
            <input />
            <Button onClick={() => this.search()} >Search</Button>
            </Input>
          </Form.Field>
        </Form>
      </Segment>
    );
  }
}


export default connect(null, {setPokemon})(SearchPokemon);

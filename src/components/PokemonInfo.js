import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

class PokemonInfo extends Component {

  render() {
    let { getPokemon } = this.props;
    console.log('this.props', this.props.getPokemon)
    return (
      <Segment>
        <h1> name: {getPokemon.name}</h1>
        <h1>weight: {getPokemon.weight}</h1>
        <h1>base experience: {getPokemon.base_experience}</h1>
        <p></p>
      </Segment>
    )
  }
}

function mapStateToProps(state) {
  return state
}


export default connect(mapStateToProps, null)(PokemonInfo)
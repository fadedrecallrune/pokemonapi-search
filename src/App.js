import React, { Component } from 'react';
import { Container} from 'semantic-ui-react'

import SearchPokemon from './components/SearchPokemon'
import PokemonInfo from './components/PokemonInfo'

class App extends Component {
  render() {
    return (
      <Container>
        <SearchPokemon />
        <PokemonInfo />
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';
import AnimalsListContainer from './containers/AnimalsListContainer';
import NewAnimalContainer from './containers/NewAnimalContainer';
import TotalAnimalContainer from './containers/TotalAnimalContainer';

class App extends Component {
  render() {
    return (
      <>
        <NewAnimalContainer />
        <h2>Animals</h2>
        <AnimalsListContainer />
        <TotalAnimalContainer />
      </>
    );
  }
}

export default App;

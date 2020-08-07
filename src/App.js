import React from 'react';
import ItemContainer from './components/itemContainer/ItemContainer'
import './App.css';
import {List} from './Images';

function App() {
  return (
    <div className="App">
      <ItemContainer children={List}/>
    </div>
  );
}

export default App;

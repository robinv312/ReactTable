import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SortingTable } from './components/SortingTable';
import { FilteringTable } from './components/FilteringTable';

function App() {
  return (
    <div className="App">
     <FilteringTable/>
    </div>
  );
}

export default App;

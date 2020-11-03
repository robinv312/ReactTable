import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SortingTable } from './components/SortingTable';
import { FilteringTable } from './components/FilteringTable';
import { PaginationTable } from './components/PaginationTable';
import { ColumnOrder } from './components/ColumnOrder';
import { RowSelection } from './components/RowSelection';


function App() {
  return (
    <div className="App">
     <RowSelection/>
    </div>
  );
}

export default App;

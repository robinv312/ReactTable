import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SortingTable } from './components/SortingTable';
import { FilteringTable } from './components/FilteringTable';
import { PaginationTable } from './components/PaginationTable';
import { ColumnOrder } from './components/ColumnOrder';
import { RowSelection } from './components/RowSelection';
import { ColumnHiding } from './components/ColumnHiding';
import { StickyTable } from './components/StickyTable';


function App() {
  return (
    <div className="App">
     
     <StickyTable/>
    </div>
  );
}

export default App;

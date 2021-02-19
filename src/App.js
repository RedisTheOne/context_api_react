import React from 'react';
import { EmployeeProvider } from './contexts/EmployeeContext';
import Employees from './components/Employees';
import Nav from './components/Nav';
import Counter from './components/useReducer/Counter_v2'

import './App.css';

function App() {
  return (
    <EmployeeProvider>
      <Counter />
      <Nav />
      <Employees />
    </EmployeeProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Greet } from './componenets/Greet';
import { Person } from './componenets/Person';

function App() {
  const personName={
    first:'munavvar',
    last:"popatiya"
  }
  return (
    <div className="App">
     <Greet name='munavvar'/>
     <Person name={personName} />
    </div>
  );
}

export default App;

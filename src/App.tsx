import { useState } from 'react';
import './App.css'
import Counter from './components/Counter/Counter';

function App() {
  const [number, setNumber]= useState(0);
  return (
    <>
      <Counter number={number} handleNumber={setNumber}/>
    </>
  )
}

export default App

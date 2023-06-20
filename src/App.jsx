import React, { useState } from 'react';
import { block } from 'million/react';
import reactLogo from '/react.svg';
import millionLogo from '/million.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
    </div>
  );
}

const AppBlock = block(App);

export default AppBlock;

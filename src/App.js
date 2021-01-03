import React, {useState} from 'react';
import Tweet from './Tweet'
import './App.css';

function App() {


  return(
    <div className="app">
      <Tweet name="Saeed" message="Today I'm happy!"/>
      <Tweet name="Norah" message="I create my first app react!"/>
      <Tweet name="Mosh" message="I like react!"/>
    </div>
  );
}

export default App;
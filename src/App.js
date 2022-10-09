import React from 'react';
import './App.css';
import Quote from './Quote';

function App() {
  return (
    <div className="App">
      <div className='Header'>
        Elon
        <tr/>
        Musk
        <tr/>
        Archive
      </div>

      <div className='all-quotes'>
        <Quote video={null} text={"If you need encouraging words, don't do it."}/>
      </div>
    </div>
  );
}

export default App;

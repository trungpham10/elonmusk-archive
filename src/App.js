import React, { useEffect, useState } from 'react';
import './App.css';
import Quote from './Quote';
import {TextField} from '@mui/material';

function App() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getData = () => {
    fetch('quotes_data.json', {headers: {'Content-Type': "application/json", 'Accept': 'application/json'}}).then(res => {
      return res.json()
    }).then(json => {
      setData(json['quotes']);
    })
  };

  useEffect(()=>{
    getData();
  },[])

  return (
    <div className="App">
      <div className='Header'>
        <div>Elon Musk</div>
        <TextField id="filled-basic" label="Search keyword" variant="outlined" size="small" onChange={event=>setSearchInput(event.target.value)}/>
      </div>

      <div className='all-quotes'>
        {
          data && data.length > 0 
          && data.filter(item => {
            if (searchInput.length === 0) {
              return item;
            } else if (item.quote.toLowerCase().includes(searchInput.toLowerCase())) {
              return item;
            }
            return null;
          }).map((item,i) => <Quote text={item.quote} url={item.url} key={i}/>) 
        }
      </div>
    </div>
  );
}

export default App;

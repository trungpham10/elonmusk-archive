import React, { useEffect, useState } from 'react';
import './App.css';
import Quote from './Quote';

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
        Elon Musk
        <input onChange={event=>setSearchInput(event.target.value)} type="text" placeholder="Search ..."/>
      </div>

      <div className='all-quotes'>
        {
          data && data.length > 0 
          && data.filter(item => {
            if (searchInput.length == 0) {
              return item;
            } else if (item.quote.toLowerCase().includes(searchInput.toLowerCase())) {
              return item;
            }
          }).map((item,i) => <Quote text={item.quote} url={item.url} key={i}/>) 
        }
      </div>
    </div>
  );
}

export default App;

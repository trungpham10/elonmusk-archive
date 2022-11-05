import React, { useEffect, useState } from 'react';
import './App.css';
import Quote from './Quote';
import { TextField } from '@mui/material';
import { Modal, Button } from 'react-bootstrap';

function App() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [show, setShow] = useState(false);

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
        <div className='header-text'>Elon Musk archive</div>
        <TextField id="filled-basic" label="type something" variant="outlined" size="small" onChange={event=>setSearchInput(event.target.value)}/>
        <Button onClick={()=>setShow(true)}>Get inspired</Button>
      </div>

      <div className='all-quotes'>
        <div>
          <Modal show={show}>
            <Modal.Body>
              <iframe width="390px" height="219px" src="https://www.youtube-nocookie.com/embed/JGfygJXTwq4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Modal.Body>
          </Modal>
        </div>
        {!show && <div>
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
        </div>}
      </div>
    </div>
  );
}

export default App;

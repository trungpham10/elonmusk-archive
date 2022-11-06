import React, { useEffect, useState } from 'react';
import './App.css';
import Quote from './Quote';
import { TextField } from '@mui/material';
import { Modal } from 'react-bootstrap';

function App() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [show, setShow] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

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
      {!show && <div className='Header'>
        <div className='header-text'>Elon Musk archive</div>
        <TextField id="filled-basic" label="type something" variant="outlined" size="small" onChange={event=>setSearchInput(event.target.value)}/>
      </div>}

      {modalUrl && <Modal className='video-modal' show={show} fullscreen={true} animation={false} restoreFocus={true} keyboard={true} centered={true} onHide={()=>setShow(false)} onClick={()=>setShow(false)}>
        <Modal.Body closeButton>
          <iframe width="390px" height="219px" src={modalUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>}
      <div className='all-quotes'>
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
            }).map((item,i) => <Quote text={item.quote} url={item.url} setShow={setShow} setModalUrl={setModalUrl} key={i}/>) 
          }
        </div>}
      </div>
    </div>
  );
}

export default App;

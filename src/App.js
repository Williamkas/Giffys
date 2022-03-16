import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';
import {Gif} from './components/Gif'

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function (){
    getGifs({keyword:'backstreet'}).then(gifs => setGifs(gifs))
  },[]) 
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map( singleGif =>
            <Gif 
              title={singleGif.title} 
              id ={singleGif.id} 
              url={singleGif.url}
            />
          )
        }
      </section>
    </div>
  );
}

export default App;

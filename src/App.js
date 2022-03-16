import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function (){
    getGifs({keyword:'goku'}).then(gifs => setGifs(gifs))
  },[]) 
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map( singleGif => <img src={singleGif}/>)
        }
      </section>
    </div>
  );
}

export default App;

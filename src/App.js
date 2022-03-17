import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import {Link, Route} from 'wouter';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1 >App</h1>
        <Link className='App' to='/gif/dragonball'>Gifs de Dragon Ball</Link>
        <Link to='/gif/pokemon'>Gifs de Pokemon</Link>
        <Link to='/gif/tomyjerry'>Gifs de Tom & Jerry</Link>
        <Link to='/gif/looneytunes'>Gifs de Looney Tunes </Link>

        <Route
          component={ListOfGifs}
          path='/gif/:keyword'
        />

      </section>
    </div>
  );
}

export default App;

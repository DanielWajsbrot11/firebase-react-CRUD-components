import React from 'react';
// import ListMovies from './components/ListMovies';
import './App.css'
import Auth from './components/Auth';

const App =() =>{
  return(
    <div>
      <section className="page">
        <div className="page-head">
          <h1>Firebase & React Backend</h1>
          <h2>by wazzytron</h2>
        </div>
        <div>
          <Auth/>
        </div>
      </section>
    </div>
  )
}

export default App;
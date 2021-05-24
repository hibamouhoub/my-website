import React from 'react'
import './App.css';
import {Home} from './components/Home'
import {Art} from './components/Art'


class App extends React.Component{

  render(){
    return (
      <div className="App">
        <nav id="nav">
          <a className="first-text" href="#home">She/Her</a>
        </nav>

       <Home imageB="home"/>

  
      </div>
    );
  
  }
}

export default App;

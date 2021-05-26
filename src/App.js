import React from 'react'
import { Home } from './components/home/Home'
import { Nav } from './components/nav/Nav'
import { Memories } from './components/memories/Memories'
import './App.css'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      home: true,
      memories: false
    }
    this.handleNew = this.handleNew.bind(this)
  }

  handleNew(event) {
    this.setState(() => {
      return {
        home: (event.target.id === "homeID") ? true : false,
        memories: (event.target.id === "memoriesID") ? true : false
      }
    })
  }

  render() {

    const navClass = (this.state.home) ? "animation start-home" : "animation start-memories" 


    return (

      <div className="App">
        <Nav start={navClass} handleNew={this.handleNew} />

        {(this.state.home) ? <Home imageB="home" /> : null}
        {(this.state.memories) ? <Memories imageB="art" /> : null}

      </div>
    );

  }
}

export default App;

import './App.css';



function App() {
  return (
    <div className="App">
      <nav id="nav">
        <a className="first-text" href="#home">She/Her</a>
    </nav>

    <section id="home">
        <div className="title-group">
            <h1>Hello World!</h1>
            <small>Welcome to my website</small><br/>
            <button className="resume">my resumé</button>
        </div>
        <div className="title-group">
            <a href="https://github.com/hibamouhoub/"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/hibamouhoub/"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/powerinz/"><i className="fab fa-instagram"></i></a>
        </div>
    </section>

    </div>
  );
}

export default App;

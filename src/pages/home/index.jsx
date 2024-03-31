import React from "react";
import logo from "../../logo.svg";
import "./styles.css";

const Home = () => {
  return (
    <>
      <h1 className="homePage">Home Page</h1>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <input type="text" className="firstName" placeholder="firstName" />
          <h1>hi Apsal</h1>
          <h2>Hi Everyone</h2>
        </header>
      </div>
    </>
  );
};

export default Home;

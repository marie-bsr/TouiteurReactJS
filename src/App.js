import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SendMessageForm from './components/SendMessageForm';
import TouitContainer from './components/TouitContainer';
import Trending from './components/Trending';

import { httpGetMessages, httpPostMessage, httpGetTrending } from './api/TouitAPI';


class App extends Component {

  render() {


    return (
      <div className="bigbox">
        <div className="header">
          <Header />
        </div>

        <div className="sendmessage">
          <SendMessageForm />
        </div>

        <div className="boxpage">

          <div className="trend">
            <Trending />
          </div>

          <div className="touitcontainer">
            <TouitContainer />
          </div>

        </div>
      </div>
    );
  }
}

export default App;

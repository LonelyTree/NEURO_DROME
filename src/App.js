import React,{Component} from 'react';
import Main from './components/main';
import Game from './components/game';
import styled from 'styled-components';
import Loadup from './components/loadup';
import Landing from './components/landing';
import User from './components/user'
import {Route,Switch} from 'react-router-dom';
import './components/Unity/backgrounds/glitch.css'


const Wrapper=styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
`
const Error=styled.div`
    margin-top: 32vh;
`
const My404 = () =>{
  return (
    <div className="body">
  <div className="container on">
    <div className="screen">
        <div className="box--outer">
          <Error>
            (404) SAFETY-EJECTION, check clientside SSD for Neo-Pegasus SniperWare.
          </Error>
        </div>
    </div>
  </div>
</div>
    )
}
class App extends Component{
  render() {
    return (
      <Wrapper className="App" id='root'>
        <Switch>
          <Route exact path='/neurodrome' render={(props) => <Main state={this.state} {...props}  />} />
          <Route exact path='/' render={(props) => <Landing state={this.state} {...props} />} />
          <Route exact path='/loadup' render={(props) => <Loadup state={this.state} {...props} />} />
          <Route exact path='/compete' render={(props) => <Game state={this.state} {...props} />} />
          <Route exact path='/user' render={(props) => <User state={this.state} {...props} />} />
          <Route component={My404} />
        </Switch>
      </Wrapper>
    );
  }
}

export default App;

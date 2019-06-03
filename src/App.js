import React,{Component} from 'react';
import Main from './components/main';
import Game from './components/game';
import styled from 'styled-components';
import Loadup from './components/loadup';


const Wrapper=styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
`
class App extends Component{
  render() {
    return (
      <Wrapper className="App" id='root'>
        <Main />
        {/* <Loadup/> */}
        {/* <Game/> */}
      </Wrapper>
    );
  }
}

export default App;

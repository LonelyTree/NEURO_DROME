import React,{Component} from 'react'
import NEURO from './Unity/NeuroDrome'
import styled from 'styled-components'
import Exit from './exit'
import './Unity/backgrounds/glitch.css'

const Wrapper=styled.div`
    background: #00000000;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
const GameView=styled.div`
    width: 70vw;
    height: 70vh;
    position: absolute;
    background: white;
`
const Butt=styled.button`
    margin-top: -4vh;
    height: 6vh;
    width: 17vw;
    border-radius: 1vw;
    font-family: megrim;
    font-weight: 600;
    background: black;
    font-size: 2vw;
    color: red;
`
const ButtHolder=styled.div`
    display: inline-flex;
    position: absolute;
    width: 100vw;
    height: 100vh;
    justify-content: space-around;
`

class Game extends Component{
    state={
        loadup: false,
        user: false
    }
toUser=(e) => {
    e.preventDefault();
    this.setState({loadup: !this.state.loadup})
    if(this.state.loadup) {
        this.props.history.push("/loadup")
    }
}
toLoadup=(e) => {
    e.preventDefault();
    this.setState({user: !this.state.user})
    if(this.state.user) {
        this.props.history.push("/user")
    }
}
    render() {
        return (
            <Wrapper>
                <div className="body">
                    <div className="container on">
                        <div className="screen">
                            <div className="box--outer">
                            <Exit/>
                                <ButtHolder>
                                    <Butt id="buttn1" className="glitch" data-text="USER" onClick={this.toUser}>USER</Butt>
                                    <Butt id="buttn2" className="glitch" data-text="NEW SOUL" onClick={this.toInput}>NEW SOUL</Butt>
                                </ButtHolder>
                                <Wrapper>
                                    <GameView>
                                        <NEURO/>
                                    </GameView>
                                </Wrapper>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>)
            }
        }
export default Game
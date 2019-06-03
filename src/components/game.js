import React,{Component} from 'react'
import NEURO from './Unity/NeuroDrome'
import styled from 'styled-components'

const Wrapper=styled.div`
    background: #adadad;
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
    margin-top: 3vh;
    height: 6vh;
    width: 15vw;
    border-radius: 1vw;
    font-family: megrim;
    font-weight: 600;
    font-size: 2vw;

`
const ButtHolder=styled.div`
    display: inline-flex;
    position: absolute;
    width: 100vw;
    height: 100vh;
    justify-content: space-around;
`

class Game extends Component{
    render() {
        return (
            <Wrapper>
                <ButtHolder>
                    <Butt>USER</Butt>
                    <Butt>NEW SOUL</Butt>
                </ButtHolder>
            <Wrapper>
            <GameView><NEURO/></GameView>
                </Wrapper>
            </Wrapper>)
            }
        }
export default Game
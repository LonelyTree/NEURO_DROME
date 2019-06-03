import React,{Component} from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
    position: relative;
    width: 100vw;
    height: auto;
`
const Title=styled.h1`
    text-align: center;
    font-family: megrim;
    font-size: 8vw;
    margin-bottom: 25vh;
`
const Souls=styled.input`
display: none;
`
const SoulLabel=styled.label`
    margin-left: 40vw;
    font-family: megrim;
    font-size: 3vw;
    box-shadow: inset 0 0 10px black;
    border-radius: 1vw 1vw 1vw 1vw;
    padding: 6vw;
    cursor: pointer;
`
class Loadup extends Component{
    render() {
        return (<Wrapper>
            <Title>LOAD UP YOUR A.I. </Title>
            <SoulLabel for='harvester'>SOUL</SoulLabel>
            <Souls id='harvester' type='file'/>
        </Wrapper>)
    }
}

export default Loadup
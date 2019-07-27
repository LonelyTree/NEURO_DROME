import React,{Component} from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
    z-index: 100;
    position: absolute;
    margin-top: -9vh;

`
const Eject=styled.button`
    width: 10vw;
    height: 5vh;
    background: transparent;
    font-family: megrim;
    font-size: 2vw;
    font-weight: 700;
    color: red;
    text-shadow: red 0 0 10px;
    box-shadow: inset 0 0 0.4vw red;
`
class Exit extends Component{

    initialize=(e) => {
        e.preventDefault();
        console.log(this.props.eject)
        this.props.eject({
            logged: false,
            username: '',
            password: ''
        })
}
    render() {
        return (
        <Wrapper>
            <Eject onClick={this.initialize}>EXIT</Eject>
        </Wrapper>
        )
    }
}

export default Exit
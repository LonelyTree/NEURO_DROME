import React,{Component} from 'react'
import styled from 'styled-components'
import Exit from './exit'

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
    margin-left: 35vw;
    font-family: megrim;
    font-size: 3vw;
    box-shadow: inset 0 0 30px #ff0000;
    border-radius: 15vw 15vw 15vw 15vw;
    padding: 6vw;
    cursor: pointer;
    border: white;
`
const Button = styled.button`
    position: absolute;
    top: 65vh;
    right: 40.1vw;
    width: 10vw;
    height: 5vh;
    background: black;
    border: red dotted 1px;
    box-shadow: inset 0 0 0.4vw red;
    color: red;
    font-family: megrim;
    font-weight: 700;
    font-size: 2vw;
`
const Input = styled.input`
    width: 18vw;
    height: 6vh;
    font-family: megrim;
    font-size: 2.5vw;
    color: red;
    background: none;
    margin-right: 12vw;
    margin-left: 15vw;
`
const Select = styled.select`
    background: transparent;
    width: 11vw;
    height: 5vh;
    box-shadow: inset 0 0 2vw red;
    border: #e80000 dotted 1px;
    color: black;
    font-family: megrim;
    font-size: 2vw;
    text-align: center;
    font-weight: 800;
`
const SelectWrap=styled.div`
    display: grid;
    justify-content: center;
    width: 90vw;
    margin-top: -9vh;
    height: 11vh;
`
const Buttons=styled.button`
    height: 4vh;
    background: transparent;
    color: red;
    font-family: megrim;
    margin-top: 1vh;
    font-size: 2vw;
    border: red solid 1px;
    padding-bottom: 4.5vh;
`
class User extends Component{
    state={
        username: '',
        password: '',
        change: false,
        loaded: false,
        souls:[]
    }
userPage=(e) => {
    e.preventDefault();
    this.setState({change: !this.state.change})
    if(this.state.change) {
        this.props.history.push("/neurodrome")
}
}
typeIn=(e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
}
soulCatcher=() => {
    if(this.state.loaded){
        for(let i=0;i<this.state.souls.length;i++){
            return <option value={this.state.souls[i]}/>}
        }
}
componentDidMount() {
    this.setState({loaded:!this.state.loaded})
}
    render() {

        return (
<div className="body">
  <div className="container on">
    <div className="screen">
        <div className="box--outer">
            <Wrapper>
            <Exit/>
                <Title>EDIT YOUR INFO</Title>
                <SelectWrap>
                <Select placeholder='Souls'>
                <option value='' disabled selected>SOULS</option>
                {this.soulCatcher()}
                </Select>
                <Buttons>Update</Buttons>
                <Buttons>Delete</Buttons>
                </SelectWrap>
                <form>
                    <Input name='username' placeholder='USERNAME' value={this.state.username} onChange={this.typeIn}/>
                                    <Input name='password' placeholder='PASSWORD' value={this.state.password} onChange={this.typeIn}/>
                <Button onClick={this.userPage}>UPDATE</Button>
                </form>
            </Wrapper>
        </div>
    </div>
  </div>
</div>)
    }
}

export default User
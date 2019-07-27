import React,{Component} from 'react'
import styled from 'styled-components'


const Input=styled.input`
    background-color: #ce253d;
    display: unset;
    margin-top: 6vh;
    height: 2.5vh;
    width: 10vw;
    font-family: monospace;
    font-size: 0.8vw;
    text-align: center;
`
const Button=styled.button`
    border: none;
    width: 4vw;
    height: 3vh;
    margin-left: 1vw;
    line-height: 2.5vh;
}
`
class RenderMe extends Component{
    constructor(props) {
        super(props)
        this.state = {
            hidden: 'hidden',
            enter: false
    }
    }
    enter=(e) => {
        e.preventDefault();
        this.setState({enter: !this.state.enter})
        if(this.state.enter) {
            this.props.history.push("/neurodrome")
        }
    }
    componentWillMount = ()=>{
        var that = this;
            console.log('this.props.wait', this.props.wait);
        setTimeout(function() {
            that.show();
        }, that.props.wait);
    }
    show = ()=>{
        this.setState({hidden : ""});
    }
    render=()=>{
        return (
            // this.state.hidden === '' &&
            <div className={this.state.hidden}>
                <form onSubmit={this.enter}>
                <Input minLength='10' maxLength='10'/>
                <Button type='submit'>SUBMIT</Button>
                </form>
            </div>
        )
    }
};

export default RenderMe
import React,{Component} from 'react'
import Glitch from './Unity/backgrounds/glitchBackground'

class Main extends Component{
    render() {
        return (
        <Glitch {...this.props}/>
        )
    }
}

export default Main
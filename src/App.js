import React, { Component } from 'react'
import Main from './components/main'
import Game from './components/game'
import styled from 'styled-components'
import Loadup from './components/loadup'
import Landing from './components/landing'
import User from './components/user'
import Exit from './components/exit'
import { Route, Switch, withRouter } from 'react-router-dom'
import '../src/css/glitch.css'

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
`
const Error = styled.div`
	margin-top: 32vh;
`
const My404 = () => {
	return (
		<div className="body">
			<div className="container on">
				<div className="screen">
					<div className="box--outer">
						<Error>
							SAFETY-EJECTION, check clientside memoryFiles for NeoPegasus
							Sniper_Ware.
						</Error>
					</div>
				</div>
			</div>
		</div>
	)
}
class App extends Component {
	state = {
		logged: true,
		username: '',
		password: '',
		souls: [],
	}
	eject = (emergency) => {
		this.setState(emergency)
		if (this.state.logged) {
			this.props.history.push('/ejection')
		}
	}
	render() {
		return (
			<Wrapper className="App" id="root">
				<Exit eject={this.eject} />
				<Switch>
					<Route
						exact
						path="/neurodrome"
						render={(props) => (
							<Main state={this.state} eject={this.eject} {...props} />
						)}
					/>
					<Route
						exact
						path="/"
						render={(props) => <Landing state={this.state} {...props} />}
					/>
					<Route
						exact
						path="/loadup"
						render={(props) => (
							<Loadup state={this.state} eject={this.eject} {...props} />
						)}
					/>
					<Route
						exact
						path="/compete"
						render={(props) => (
							<Game state={this.state} eject={this.eject} {...props} />
						)}
					/>
					<Route
						exact
						path="/user"
						render={(props) => (
							<User state={this.state} eject={this.eject} {...props} />
						)}
					/>
					<Route component={My404} />
					<Route exact path="/ejection" component={My404} />
				</Switch>
			</Wrapper>
		)
	}
}

export default withRouter(App)

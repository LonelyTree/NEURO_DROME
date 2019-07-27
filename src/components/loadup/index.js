import React, { Component } from 'react'
import styled from 'styled-components'
import Exit from '../exit'

const Wrapper = styled.div`
	position: relative;
	width: 100vw;
	height: auto;
`
const PullWrapper = styled.div`
	position: absolute;
	display: inline-block;
	width: 45vw;
	height: 10vw;
`
const NewWrapper = styled.div`
	position: absolute;
	display: inline-block;
	width: 45vw;
	height: 10vw;
	margin-left: 45vw;
`
const Pull = styled.h1`
	margin-left: 12.5vw;
	font-size: 4vw;
`
const Storage = styled.select`
	margin-left: 20vw;
	margin-top: 3vh;
	height: 3.6vw;
	width: 9vw;
	font-family: megrim;
	font-size: 1.1vw;
	background: transparent;
	box-shadow: inset 0 0 1vw red;
	color: red;
	font-weight: 700;
`
const New = styled.h1`
	margin-left: 11.5vw;
	margin-bottom: 4vh;
	font-size: 3.7vw;
`

const Title = styled.h1`
	text-align: center;
	font-family: megrim;
	font-size: 8vw;
	margin-bottom: 25vh;
`
const Souls = styled.input`
	display: none;
`
const SoulLabel = styled.label`
	margin-left: 19vw;
	font-family: megrim;
	font-size: 3vw;
	box-shadow: inset 0 0 30px #ff0000;
	border-radius: 0.3vw 0.3vw 0.3vw 0.3vw;
	padding: 0.3vw;
	padding-left: 1vw;
	padding-right: 1vw;
	cursor: pointer;
	border: white;
`
const Button = styled.button`
	position: absolute;
	top: 26vh;
	right: 32vw;
	width: 26vw;
	height: 5vh;
	background: black;
	border: red dotted 1px;
	box-shadow: inset 0 0 0.4vw red;
	color: red;
	font-family: megrim;
	font-weight: 700;
	font-size: 2vw;
`
class Loadup extends Component {
	state = {
		battle: false,
	}
	toBattle = (e) => {
		e.preventDefault()
		this.setState({ battle: !this.state.battle })
		if (this.state.battle) {
			this.props.history.push('/compete')
		}
	}
	pullFromStorage = () => {
		if (this.state.loaded) {
			for (let i = 0; i < this.state.souls.length; i++) {
				return <option value={this.state.souls[i]} />
			}
		}
	}
	render() {
		return (
			<div className="body">
				<div className="container on">
					<div className="screen">
						<div className="box--outer">
							<Wrapper>
								<Exit />
								<form onSubmit={this.toBattle}>
									<Title
										className="glitch"
										id="loadup"
										data-text="LOAD UP YOUR A.I."
									>
										LOAD UP YOUR A.I.{' '}
									</Title>
									<PullWrapper>
										<Pull>PULL A.I.</Pull>
										<Storage>
											<option value="" disabled selected>
												COLD STORAGE
											</option>
											{this.pullFromStorage()}
										</Storage>
									</PullWrapper>
									<NewWrapper>
										<New>INPUT NEW</New>
										<SoulLabel
											htmlFor="harvester"
											className="glitch"
											id="soulFor"
											data-text="ALIVE"
										>
											SOUL
										</SoulLabel>
										<Souls id="harvester" type="file" />
										<Button type="submit">ENTER THE NEURO//DROME</Button>
									</NewWrapper>
								</form>
							</Wrapper>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Loadup

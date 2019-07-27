import React, { Component } from 'react'
import styled from 'styled-components'
import Exit from '../exit'
import '../../css/glitch.css'

const Button = styled.button`
	width: 10vw;
	height: 10vh;
	margin-left: 8vw;
	margin-right: 9vw;
	background: #6b6b6b00;
	box-shadow: 0 0 3vw red;
	border: red;
	color: red;
	font-family: megrim;
	font-size: 1.8vw;
`
class Glitch extends Component {
	state = {
		logged: false,
		user: false,
		loadup: false,
		username: '',
		password: '',
		regusername: '',
		regpassword: '',
	}
	handleUsername = (e) => {
		this.setState({ username: e.target.value, regusername: e.target.value })
	}
	handlePassword = (e) => {
		this.setState({ password: e.target.value, regpassword: e.target.value })
	}
	userPage = (e) => {
		e.preventDefault()
		this.setState({ user: !this.state.user })
		if (this.state.user) {
			this.props.history.push('/user')
		}
	}
	inputPage = (e) => {
		e.preventDefault()
		this.setState({ loadup: !this.state.loadup })
		if (this.state.loadup) {
			this.props.history.push('/loadup')
		}
	}
	render() {
		return (
			<div className="body">
				<div className="container on">
					<div className="screen">
						<h3 className="glitch" data-text="CONNECTION ESTABLISHED">
							CONNECTION ESTABLISHED
						</h3>
						<div className="box--outer">
							<div className="box">
								<Exit eject={this.props.eject} />
								<div className="box--inner">
									<div className="content">
										<div className="holder">
											<h1 className="glitch" data-text="NEURO // DROME">
												NEURO // D<span id="offset">R</span>OME
											</h1>{' '}
											<br />
											<p className="glitch" data-text="Build, Train, Compete">
												Build, Train, Compete.
											</p>{' '}
											<br />
											<p
												id="desc"
												className="glitch"
												data-text="Baptize your A.I. in the fires of learned superiority."
											>
												Baptize your A.I. in the fires of learned superiority.
											</p>
											<br />
											<br />
											{this.state.logged ? (
												<>
													<Button onClick={this.userPage}>USER//INFO</Button>
													<Button onClick={this.inputPage}>INPUT//A.I.</Button>
												</>
											) : (
												<div>
													<div className="row">
														<div className="col col__left label">Login</div>
														<div className="col col__center">
															<input
																onChange={this.handleUsername}
																type="text"
																id="login"
																name="username regusername"
																maxLength="32"
																placeholder="DROME##ID"
															/>
														</div>
													</div>
													<form onSubmit={this.login || this.register}>
														<div className="row">
															<div className="col col__left label">
																Password
															</div>
															<div className="col col__center">
																<input
																	onChange={this.handlePassword}
																	type="password"
																	id="password"
																	name="password regpassword"
																	required="required"
																	placeholder="DROME#PASS"
																	dataerror=""
																	maxLength="32"
																	autoComplete="new-password"
																	autoFocus={true}
																/>
															</div>
														</div>
														{/* <b className="flash">ACCESS DENIED</b> */}
														<div className="row">
															<button
																onSubmit={this.login}
																type="submit"
																id="submit"
																name="login"
															>
																[login]
															</button>
															<button
																onSubmit={this.register}
																type="submit"
																id="submit"
																name="register"
															>
																[register]
															</button>
														</div>
													</form>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Glitch

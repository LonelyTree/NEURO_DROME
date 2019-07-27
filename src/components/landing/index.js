import React, { Component } from 'react'
import Typing from 'react-typing-animation'
import '../../css/landing.css'
import RenderMe from '../render'

class Landing extends Component {
	render() {
		return (
			<div className="main">
				<div className="crt">
					<Typing>
						<span>
							// Welcome to <Typing.Delay ms={2000} />
							|\|[-|_|/2[] |)/2[]/\/\[-
						</span>
						<br />
						<br />
						<br />
						<Typing.Delay ms={1000} />
						<span>
							// Scanning computer for Neo-Pegasus, Rubberduck, and other
							associated analogetic patterns.{' '}
						</span>
						<br />
						<br />
						<Typing.Delay ms={3000} />
						<span>
							// Likelyhood of traceback =<Typing.Delay ms={1500} /> 2%
						</span>
						<br />
						<br />
						<span>
							// Entrance GRANTED with constraints =<Typing.Delay ms={1500} />
						</span>
						<br />
						<br />
						<br />
						<span>// Input 10elEm $SHA Encryption Key to Enter ---:></span>
						<br />
					</Typing>
					<RenderMe {...this.props} wait={27300} />
				</div>
			</div>
		)
	}
}

export default Landing

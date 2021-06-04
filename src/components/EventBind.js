import React, { Component } from 'react'

class EventBind extends Component {
	constructor(props) {
		super(props)

		this.state = {
			message: 'Hello',
		}
		// part of Approach 3
		// this.clickHandler = this.clickHandler.bind(this)
	}

	//  used for Approach 1,2 & 3
	// clickHandler() {
	//     this.setState({
	//         message: 'Goodbye'
	//     })
	//     console.log(this)
	// }

	clickHandler = () => {
		this.setState({
			message: 'Goodbye',
		})
	}

	render() {
		return (
			<div>
				<div>{this.state.message}</div>
				{/* Approach 1
                <button onClick={this.clickHandler.bind(this)}>Click</button> */}

				{/* Approach 2
                <button onClick={() => this.clickHandler()}>Click</button> */}

				{/* Approach 3 & 4 */}
				<button onClick={this.clickHandler}>Click</button>
			</div>
		)
	}
}

export default EventBind

/* Four Approaches :
1) Binding in render
2) Arrow Function in render
3) Binding in the class constructor
4) Class property as arrow function
*/

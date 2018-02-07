import React, { Component } from 'react'
import axios from 'axios'

import Beer from './beer'

const URL = 'https://api.punkapi.com/v2/beers/1'

export default class AboutBeers extends Component {
	constructor(props) {
		super(props)
		this.state = {beer: []}
		this.getBeer()
	}
	getBeer(){
		axios.get(URL)
			.then(resp => this.setState({...this.state, beer: resp.data}))
	}
	render() {
		return (
			<div>
				<Beer beer={this.state.beer} />
			</div>
		)
	}
}

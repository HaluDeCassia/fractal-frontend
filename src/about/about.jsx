import React, { Component } from 'react'
import axios from 'axios'

import Beer from './beer'

const URL = 'https://api.punkapi.com/v2/beers'

export default class AboutBeers extends Component {
	constructor(props) {
		super(props)
		this.state = {beer: []}
		this.getBeer()
	}
	getBeer(){
		axios.get(`${URL}/${this.props.params.id}`)
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

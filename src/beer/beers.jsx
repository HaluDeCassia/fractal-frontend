import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import BeerList from './beerList'

const URL = 'https://api.punkapi.com/v2/beers'

export default class Beers extends Component {
	constructor(props) {
		super(props)
		this.state = {list: []}
		this.refresh()
	}
	refresh(){
		axios.get(URL)
			.then(resp => this.setState({...this.state, list: resp.data}))
	}
	render() {
		return (
			<div>
				<PageHeader name="Tarefas" small="Cadastros" />
				<BeerList list={this.state.list} />
			</div>
		)
	}
}

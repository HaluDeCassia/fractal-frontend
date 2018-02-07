import React from 'react';
import IconButton from '../template/iconButton'
import PageHeader from '../template/pageHeader'
import Grid from '../template/grid'

export default props => {
	const renderRows = () => {
		const beer = props.beer || []
		return beer.map(json => (
			<div key={json.id}>
				<PageHeader name={json.name} small={json.tagline} />
				<Grid cols="12 2">
					<img className="img-responsive img-thumbnail" src={json.image_url} alt={json.name}/>
				</Grid>
				<Grid cols="12 10">
					<hr className="visible-xs"/>
					<Grid cols="12">
						{json.description}
					</Grid>
				</Grid>
			</div>
		))
	}
	return (
		<div>
			{renderRows()}
		</div>
	)
}

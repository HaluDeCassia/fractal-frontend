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
				<Grid cols="12 9 10"></Grid>
				<div className="media">
					<div className="media-left media-middle">
						<a href="#">
							<img className="img-responsive img-thumbnail media-object" src={json.image_url} alt={json.name}/>
						</a>
					</div>
					<div className="media-body">
						{json.description}
					</div>
				</div>
			</div>
		))
	}
	return (
		<div>
			{renderRows()}
		</div>
	)
}

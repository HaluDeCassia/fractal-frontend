import React from 'react';

export default props => {
	const renderRows = () => {
		const list = props.list || []
		return list.map(json => (
			<a key={json.id} href={`#/about/${json.id}`} className="list-group-item">
				<h4 className="media-heading">{json.name} <small>{json.tagline}</small></h4>
			</a>
		))
	}
	return (
		<div className="list-group">
		  	{renderRows()}
		</div>
	)
}

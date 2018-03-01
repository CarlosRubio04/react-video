import React from 'react';
import './spinner.css';

function	Spiner(props) {
	if (!props.active) return null
	return(
		<div className="Spiner">
			<span>Cargando ...</span>
		</div>
	)
}

export default Spiner;
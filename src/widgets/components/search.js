import React from 'react';
import './search.css';

function Search(props) {
	return (
		<form 
			className="Search"
			onSubmit = { props.handleSubmit }
		>
			<input 
				ref={ props.setRef }
				type="text"
				placeholder="Busca tu video Favorito"
				className="Search-input"
				onChange={ props.handleChange }
				value={ props.value}
			/>
		</form>
	)
}

export default Search;
import React from 'react';
import FullScreenIcon from '../../icons/components/full-screen';
import './full-screen.css';

const FullScreen = (props) => (
	<div 
		className="FullScreen"
		onClick={props.handleFullScreen}
	>
		<FullScreenIcon
			color="white"
			size={25}
		/>
	</div>
)

export default FullScreen;


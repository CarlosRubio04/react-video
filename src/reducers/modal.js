const initialState = {
  modal : {
    visibility: false,
    mediaId: null,
  }
}

function modal(state = initialState, action) {
	switch (action.type) {
		case 'OPENS_MODAL':
			return state
		case 'CLOSE_MODAL':
			return state
		default : 
			return state
	}
}

export default modal;



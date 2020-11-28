import { GET_IMAGE_LIST } from './constants'

const defaultState = {
  photos: []
}

const reducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case GET_IMAGE_LIST:
      newState = JSON.parse(JSON.stringify(state));
      newState.photos = action.data;
      return newState;
    default:
      return state;
  }
}

export default reducer
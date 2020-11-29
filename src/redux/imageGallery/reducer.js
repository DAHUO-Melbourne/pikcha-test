import { GET_IMAGE_LIST, SET_ERROR } from './constants';

const defaultState = {
  photos: [],
  error: false,
};

const reducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case GET_IMAGE_LIST:
      newState = JSON.parse(JSON.stringify(state));
      newState.photos = action.data;
      return newState;
    case SET_ERROR:
      newState = JSON.parse(JSON.stringify(state));
      newState.error = true;
      return newState;
    default:
      return state;
  }
};

export default reducer;

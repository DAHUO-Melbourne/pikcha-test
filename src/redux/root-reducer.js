import { combineReducers } from 'redux';
import { reducer as imageGalleryReducer } from './imageGallery';

export default combineReducers({
  imageGallery: imageGalleryReducer,
});

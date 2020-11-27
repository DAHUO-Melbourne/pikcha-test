import { combineReducers } from 'redux';
import { reducer as imageGalleryReducer } from '../component/ImageGallery/store';

export default combineReducers({
  imageGallery: imageGalleryReducer
})
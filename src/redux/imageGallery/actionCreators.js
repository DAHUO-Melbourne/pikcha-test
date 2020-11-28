import axios from 'axios';
import { GET_IMAGE_LIST } from './constants';

export const getImages = () => {
  return (dispatch) => {
    axios.get('https://api.unsplash.com/photos/?client_id=9XLAQ6teZ78CjVABioT7aGjEmOgOiHBf_Z9_5DlxWT8').then((res) => {
      const results = res.data;
      let thumbArr = []
      results.map(result => thumbArr.push(result.urls.thumb))
      dispatch(setList(thumbArr))
    }).catch();
  }
}

export const setList = (data) => ({
  type: GET_IMAGE_LIST,
  data: data
})
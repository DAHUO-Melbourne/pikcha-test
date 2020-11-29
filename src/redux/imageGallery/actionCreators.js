import axios from 'axios';
import { GET_IMAGE_LIST, FETCH_URL, SET_ERROR } from './constants';

export const getImages = () => {
  return (dispatch) => {
    axios
      .get(FETCH_URL)
      .then((res) => {
        const results = res.data;
        let thumbArr = [];
        results.map((result) => thumbArr.push(result.urls.thumb));
        dispatch(setList(thumbArr));
      })
      .catch(() => {
        dispatch(setError());
      });
  };
};

export const setList = (data) => ({
  type: GET_IMAGE_LIST,
  data: data,
});

export const setError = () => ({
  type: SET_ERROR,
});

import reducer from './reducer';
import { GET_IMAGE_LIST, SET_ERROR } from './constants';

describe('reducer correctly returned', () => {
  it('photos list correctly returned', () => {
    const action = {
      type: GET_IMAGE_LIST,
      data: [1, 2, 3]
    }
    expect(reducer({ photos: [] }, action).photos).toStrictEqual([1, 2, 3])
  })
  it('error message correctly returned', () => {
    const action = {
      type: SET_ERROR,
    }
    expect(reducer({ photos: [] }, action).error).toStrictEqual(true)
  })
})
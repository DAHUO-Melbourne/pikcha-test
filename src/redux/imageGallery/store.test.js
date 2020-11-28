import reducer from './reducer';
import { GET_IMAGE_LIST } from './constants';

describe('reducer correctly returned', () => {
  it('reducer correctly returned', () => {
    const action = {
      type: GET_IMAGE_LIST,
      data: [1, 2, 3]
    }
    expect(reducer({ photos: [] }, action).photos).toStrictEqual([1, 2, 3])
  })
})
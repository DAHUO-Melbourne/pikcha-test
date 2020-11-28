import { testStore } from '../../../utils/testUtils';
import reducer from './reducer';
import * as constants from './constants';
import { getImages } from './actionCreators';
import moxios from 'moxios';

describe('reducer correctly returned', () => {
  it('reducer correctly returned', () => {
    const action = {
      type: constants.GET_IMAGE_LIST,
      data: [1, 2, 3]
    }
    expect(reducer({ photos: [] }, action).photos).toStrictEqual([1, 2, 3])
  })
})
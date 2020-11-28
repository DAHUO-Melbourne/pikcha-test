
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../../utils/testUtils';
import ImageGallary from './index';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<ImageGallary store={store} />).childAt(0).dive();
  return wrapper;
}

describe('correctly rendered', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      imageGallery:
      {
        photos: ['img1', 'img2']
      }
    }
    wrapper = setUp(initialState);
  })
  it('Should render correctly', () => {
    const component = findByTestAttr(wrapper, 'gallery-wrapper');
    expect(component.length).toBe(1)
  })
})
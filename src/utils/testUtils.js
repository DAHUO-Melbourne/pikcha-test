import { middlewares } from '../store/index';
import rootReducer from '../store/root-reducer';
import { applyMiddleware, createStore } from 'redux';

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
}

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};
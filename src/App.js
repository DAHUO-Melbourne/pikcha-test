import ImageGallery from './component/ImageGallery';
import { Provider } from 'react-redux';
import store from './store'

function App () {
  return (
    <div className="App">
      <Provider store={store}>
        <ImageGallery />
      </Provider>
    </div>
  );
}

export default App;

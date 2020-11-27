import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import './ImageGallary.css';

function ImageGallary (props) {
  const { list, getImages } = props;
  useEffect(() => {
    getImages()
  }, [getImages])
  return (
    <div data-test="gallery-wrapper">
      <h1 className="heading">Welcome to Pikcha!</h1>
      <div className="flex-container">
        {list.map(item => (
          <img src={item} key={item} alt="img" />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.imageGallery.imageList
})

const mapDispatchToProps = (dispatch) => {
  return {
    getImages () {
      dispatch(actionCreators.getImages())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallary)
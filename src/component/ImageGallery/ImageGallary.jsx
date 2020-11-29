import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/imageGallery';
import './ImageGallary.scss';

function ImageGallary ({ list, getImages, error }) {
  useEffect(() => {
    getImages()
  }, [getImages])
  return (
    <div data-test="gallery-wrapper">
      <h1 className="heading">Welcome to Pikcha!</h1>
      <div className="flex-container">
        {list.map((item, index) => (
          <div key={index}>
            <img src={item} alt="img" />
          </div>
        ))}
      </div>
      {error && <div>OOPS! SOME THING HAPPENS TO OUR SERVER, PLEASE WAIT A WHILE</div>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.imageGallery.photos,
  error: state.imageGallery.error
})

const mapDispatchToProps = (dispatch) => {
  return {
    getImages () {
      dispatch(actionCreators.getImages())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallary)
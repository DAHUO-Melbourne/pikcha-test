import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'

function ImageGallary (props) {
  const { list, getImages } = props;
  useEffect(() => {
    getImages()
  }, [])
  return (
    <div>
      {list.map(item => (
        <img src={item} key={item} />
      ))}
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
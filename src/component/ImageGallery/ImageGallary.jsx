import React from 'react';
import { connect } from 'react-redux';

function ImageGallary (props) {
  const { list } = props
  return (
    <div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  list: state.imageGallery.imageList
})

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallary)
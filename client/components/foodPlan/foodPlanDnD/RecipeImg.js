import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

const recipeImgSource = {
  beginDrag(props) {
    return { recipeImgId: props.id};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class RecipeImg extends Component {
  render() {
    const { connectDragSource, isDragging, recipeImgUrl } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        borderRadius: '50%',
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        <img src={recipeImgUrl} />
      </div>
    );
  }
}

RecipeImg.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
}

export default DragSource(ItemTypes.RecipeImg, recipeImgSource, collect)(RecipeImg)

import React, { Component } from 'react';
import { DragSource } from 'react-dnd'

const Types = {
  ITEM: 'recipe_img'
}

const imgSource = {
  beginDrag: function(props) {
    const item = { src: props.src, id: props.id }
    console.log('begin dragging ', props)
    return item
  },
  endDrag(props, monitor, component) {
    console.log('dropped!')
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class RecipeImg extends Component {

  render() {
    const { isDragging, connectDragSource, id, src } = this.props

    return connectDragSource(<img id={id} src={src} />)
  }
}

export default DragSource(Types.ITEM, imgSource, collect)(RecipeImg)

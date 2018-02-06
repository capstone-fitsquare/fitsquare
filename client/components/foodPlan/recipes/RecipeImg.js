import React, { Component } from 'react';
import { DragSource } from 'react-dnd'

const Types = {
  ITEM: 'recipe_img'
}

const imgSource = {
  beginDrag: function(props) {
    const item = {
      id: props.id,
      src: props.src,
      calories: props.calories,
      protein: props.protein,
      carbs: props.carbs,
      fat: props.fat
    }
    console.log('begin dragging ', props)
    return item
  },
  endDrag(props, monitor, component) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()
    if (dropResult) console.log(`Dropped recipe ${item.id} into ${dropResult.name}!`)
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class RecipeImg extends Component {

  componentDidMount() {
		const img = new Image()
		img.onload = () => this.props.connectDragPreview(img)
    img.src = this.props.src
    img.style = { borderRadius: '50%' }
  }

  render() {
    const { isDragging, connectDragSource, id, src } = this.props

    const border = isDragging ? '2px solid black' : '0'

    return connectDragSource(<img style={{ border }} id={id} src={src} />)
  }
}

export default DragSource(Types.ITEM, imgSource, collect)(RecipeImg)

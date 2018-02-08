import React, { Component } from 'react';
import { DragSource } from 'react-dnd'

const Types = {
  ITEM: 'recipe_img'
}

const imgSource = {
  beginDrag: function(props) {
    const item = {
      id: props.id,
      name: props.name,
      src: props.src,
      meal: props.meal,
      calories: props.calories,
      protein: props.protein,
      carbs: props.carbs,
      fat: props.fat,
      ingredients: props.ingredients
    }
    console.log('begin dragging ', props)
    return item
  },
  endDrag(props, monitor, component) {
    const recipe = monitor.getItem()
    const dropResult = monitor.getDropResult()
    if (dropResult) console.log(`Dropped recipe ${recipe.name} into ${dropResult.name}!`)
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

class RecipeImg extends Component {

  componentDidMount() {
		const img = new Image()
		img.onload = () => this.props.connectDragPreview(img)
    img.src = '/images/salad.png'
  }

  render() {
    const { isDragging, connectDragSource, id, src } = this.props

    const border = isDragging ? '2px solid black' : '0'

    const style = {
      borderRadius: '12px',
    }

    return connectDragSource(<img style={{ ...style, border }} id={id} src={src} />)
  }
}

export default DragSource(Types.ITEM, imgSource, collect)(RecipeImg)

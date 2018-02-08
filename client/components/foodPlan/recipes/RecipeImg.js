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
    const images = [
      '/images/foods/salad.png',
      '/images/foods/sandwich.png',
      '/images/foods/noodles.png',
      '/images/foods/cereals.png',
      '/images/foods/apple.png',
    ]

    const random = Math.floor(Math.random() * images.length) + 1
    img.src = images[random]
  }

  render() {
    const { isDragging, connectDragSource, id, src } = this.props

    const border = isDragging ? '2px solid black' : '0'

    const style = {
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.18)'
    }

    return connectDragSource(<img className="recipe-img" style={{ ...style, border }} id={id} src={src} />)
  }
}

export default DragSource(Types.ITEM, imgSource, collect)(RecipeImg)

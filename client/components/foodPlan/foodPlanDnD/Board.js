import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd'; // goes at highest level of necessity
import HTML5Backend from 'react-dnd-html5-backend';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';
import DaySquare from './DaySquare'
import RecipeImg from './RecipeImg'
import { moveImg, canMoveImg } from './Game'


class Board extends Component {

  handleSquareClick(toNewDiv) {
    if (canMoveImg(toNewDiv)) moveImg(toNewDiv)
  }

  renderDaySquare(dayN) {

    const { recipeImgParentDivId, imgUrl } = this.props
    const placedRecipe = <img src={imgUrl} />

    return (
      <div key={dayN} onClick={() => this.handleSquareClick()}>
        <DaySquare>
          {this.renderDaySquare(imgUrl)}
        </DaySquare>
      </div>
    )
  }

  renderPiece(imgUrl) {
    return <img src={recipeImgUrl} />
  }

  render() {
    <div key={dayN}
    onClick={() => this.handleSquareClick(dayN)}>
      <Square black={black}>
        {piece}
      </Square>
    </div>
  }
}

export default DragDropContext(HTML5Backend)(Board);

Board.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
}

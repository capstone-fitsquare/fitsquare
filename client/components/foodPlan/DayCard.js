import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import SearchButton from './SearchButton'
import MacroGoalCountdown from './MacroGoalCountdown';
import MicroGoalCountdown from './MicroGoalCountdown';
import Piechart from '../visualizations/PieChart'
import store, { addFoodToDayN, removeFoodFromDayN, addFoodToGroceryList } from '../../store'
import { Button, Icon } from 'semantic-ui-react'
import { DropTarget } from 'react-dnd'
import MacrosProgress from './MacrosProgress'


const Types = {
  ITEM: 'recipe_img'
}

const dayCardTarget = {
	drop(props, monitor) {
    const recipe = monitor.getItem()
    const dayN = props.dayN
    const food = {
      id: recipe.id,
      name: recipe.name,
      meal: recipe.meal,
      img: recipe.src,
      calories: recipe.calories,
      protein: recipe.protein,
      carbs: recipe.carbs,
      fat: recipe.fat,
      ingredients: recipe.ingredients
    }
    const meal = recipe.meal
    const ingredients = recipe.ingredients
    console.log('food', food)
    console.log('meal', meal)
    console.log('typeof meal', typeof(meal))
    console.log('ingredients', ingredients)
    store.dispatch(addFoodToDayN(dayN, food, meal))
    store.dispatch(addFoodToGroceryList(ingredients))
    return { name: 'Day Card', dayN: props.dayN }
	},
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    draggedRecipe: monitor.getItem(),
    didDrop: monitor.didDrop(),
  }
}

class DayCard extends Component {

  constructor() {
    super()
    this.state = {
      showDetails: false
    }
    this.toggleDetails = this.toggleDetails.bind(this)
  }

  componentWillMount() {
    // if (this.props.dayN === 0) this.setState({ showDetails: true })
  }

  toggleDetails() {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {

    const { breakfast, lunch, dinner, snack, dayN } = this.props

    console.log('breakfast', breakfast)

    const { canDrop, isOver, connectDropTarget, draggedRecipe, didDrop } = this.props

		const isActive = canDrop && isOver

    let dayBackground = 'lightgreen'
		if (isActive) {
			dayBackground = 'lightcyan'
		} else if (canDrop) {
			dayBackground = 'lightorange'
    }

    let detailsBackground = 'lightyellow'
		if (isActive) {
			detailsBackground = 'lightcyan'
		} else if (canDrop) {
			detailsBackground = 'lightorange'
		}

    return this.state.showDetails ?
    connectDropTarget(
      <div style={container}>

        <div style={width}>
          <div style={progress}>
            <MacrosProgress />
          </div>
          <div style={{...meal, background: detailsBackground}}>
            <div style={breakfast}>
              <p>Breakfast</p>
              <Button icon size='mini' onClick={this.toggleDetails} circular={true} style={minus}>
                <Icon name='window minimize' />
              </Button>
            </div>
            <div>
                {breakfast.length ? breakfast.map(breakfast =>
                  <div key={breakfast.id}>
                    <div>{breakfast.name}</div>
                    <img src={breakfast.img} />
                  </div>
                ) : null}
            </div>
            <SearchButton meal="breakfast" dayN={dayN} />
          </div>

          <div style={{...meal, background: detailsBackground}}>
            <div>
              <p>Lunch</p>
            </div>
            <div>
                {lunch &&
                  <div>
                    <div>{lunch.name}</div>
                    <img src={lunch.imgUrl} />
                  </div>
                }
            </div>
            <SearchButton meal="lunch" dayN={dayN} />
          </div>

          <div style={{...meal, background: detailsBackground}}>
            <div>
              <p>Dinner</p>
            </div>
            <div>
                {dinner &&
                  <div>
                    <div>{dinner.name}</div>
                    <img src={dinner.imgUrl} />
                  </div>
                }
            </div>
            <SearchButton meal="dinner" dayN={dayN} />
          </div>

          <div style={{...meal, background: detailsBackground}}>
            <div>
              <p>Snacks</p>
            </div>
            <div>
                {snack &&
                  <div>
                    <div>{snack.name}</div>
                    <img src={snack.imgUrl} />
                  </div>
                }
            </div>
            <SearchButton meal="snacks" dayN={dayN} />
          </div>
        </div>

      </div>
    ) : connectDropTarget(
      <div id={`dayN-${dayN}`} style={square} style={{...square, background: dayBackground}} onClick={this.toggleDetails}>
      {
        isActive ?
        <div>'Release to drop'</div>
        : <div>'Drag an img here'</div>
      }
      </div>
    )
  }

}

const mapState = (state, ownProps) => {
  // return {
  //   foodsDayN: state.foodsDayN
  // }
  const { dayN } = ownProps
  return {
    breakfast: state.foodsDayN[dayN].breakfast,
    lunch: state.foodsDayN[dayN].lunch,
    dinner: state.foodsDayN[dayN].dinner,
    snacks: state.foodsDayN[dayN].snacks
  }
}

const mapDispatch = dispatch => {
  return bindActionCreators({
    addFoodToDayN
  }, dispatch)
}

export default DropTarget(Types.ITEM, dayCardTarget, collect)(connect(mapState, mapDispatch)(DayCard))

const styles = {
  container: {
    display: 'flex',
    margin: '1em',
    padding: '1em'
  },
  meal: {
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '3px',
    background: 'lightyellow'
  },
  square: {
    background: 'lightgreen',
    height: '100px',
    width: '100px',
    borderRadius: '3px',
    margin: '1em',
    padding: '1em'
  },
  minus: {
    marginLeft: '3em',
  },
  breakfast: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  width: {
    width: '400px'
  },
  progress: {
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '3px',
    background: 'lightcyan'
  }
}

const { container, meal, square, minus, breakfast, width, progress } = styles

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
import { Collapse } from 'react-collapse'
import { presets } from 'react-motion'

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
    const meal = recipe.meal === 'snack' ? 'snacks' : recipe.meal
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
      showPreview: true,
      showDetails: false,
    }
    this.togglePreview = this.togglePreview.bind(this)
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

  togglePreview() {
    this.setState({
      showPreview: !this.state.showPreview
    })
  }

  render() {

    const { breakfast, lunch, dinner, snacks, dayN, macroGoal } = this.props

    let weekday

    switch(dayN){
      case 0:
        weekday = 'M'
        break;
      case 1:
        weekday = 'T'
        break;
      case 2:
        weekday = 'W'
        break;
      case 3:
        weekday = "Th"
        break;
      case 4:
        weekday = "F"
        break;
    }

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

    const { shrink } = this.props
    const newClass = shrink ? 'shrink daycard' : 'daycard'

    console.log('----------------')
    console.log('dayN', dayN)
    console.log('shrink', shrink)
    console.log('newClass', newClass)
    console.log('----------------')

    return this.state.showDetails ?
    connectDropTarget(
      <div>
        <Collapse
          isOpened={this.state.showDetails}
          springConfig={presets.gentle}>
          <div style={container}>
            <div style={width}>
              <div style={progress}>
                <Button icon size='mini' circular={true} style={minus}
                  onClick={() => {
                    this.toggleDetails()
                    this.props.toggleDayN(`day${dayN}`)
                  }}>
                  <Icon name='window minimize' />
                </Button>
                <MacrosProgress
                  showDetails={this.state.showDetails}
                  breakfast={breakfast}
                  lunch={lunch}
                  dinner={dinner}
                  snacks={snacks}
                  macroGoal={macroGoal}
                />
              </div>
              <div style={{...meal, background: detailsBackground}}>
                <div style={breakfast}>
                  <p>Breakfast</p>
                </div>
                <div>
                    {breakfast.length ? breakfast.map(recipe =>
                      <div key={recipe.id}>
                        <div>{recipe.name}</div>
                        <img src={recipe.img} />
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
                    {lunch.length ? lunch.map(recipe =>
                      <div key={recipe.id}>
                        <div>{recipe.name}</div>
                        <img src={recipe.img} />
                      </div>
                    ) : null}
                </div>
                <SearchButton meal="lunch" dayN={dayN} />
              </div>

              <div style={{...meal, background: detailsBackground}}>
                <div>
                  <p>Dinner</p>
                </div>
                <div>
                    {dinner.length ? dinner.map(recipe =>
                      <div key={recipe.id}>
                        <div>{recipe.name}</div>
                        <img src={recipe.img} />
                      </div>
                    ) : null}
                </div>
                <SearchButton meal="dinner" dayN={dayN} />
              </div>

              <div style={{...meal, background: detailsBackground}}>
                <div>
                  <p>Snacks</p>
                </div>
                <div>
                    {snacks.length ? snacks.map(recipe =>
                      <div key={recipe.id}>
                        <div>{recipe.name}</div>
                        <img src={recipe.img} />
                      </div>
                    ) : null}
                </div>
                <SearchButton meal="snacks" dayN={dayN} />
              </div>
            </div>

          </div>
        </Collapse>
      </div>

    ) : connectDropTarget(
      <div className={newClass}>
        <Collapse
          isOpened={this.state.showPreview}
          springConfig={presets.gentle}>
          <h4 style={{textAlign: 'center'}}>{weekday}</h4>
          <div style={square} style={{...square, background: dayBackground}}
            onClick={() => {
              this.toggleDetails()
              this.props.toggleDayN(`day${dayN}`)
            }}>
            <MacrosProgress
              showDetails={this.state.showDetails}
              breakfast={breakfast}
              lunch={lunch}
              dinner={dinner}
              snacks={snacks}
              macroGoal={macroGoal}
            />
          </div>
        </Collapse>
      </div>
    )
  }

}

const mapState = (state, ownProps) => {
  const { dayN } = ownProps
  return {
    breakfast: state.foodsDayN[dayN].breakfast,
    lunch: state.foodsDayN[dayN].lunch,
    dinner: state.foodsDayN[dayN].dinner,
    snacks: state.foodsDayN[dayN].snacks,
    macroGoal: state.macroGoals[0]  // filter by user
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
    padding: '1em',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.18)'
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
    borderRadius: '3px',
    background: 'lightcyan'
  }
}

const { container, meal, square, minus, breakfast, width, progress } = styles

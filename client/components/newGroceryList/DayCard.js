import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import SearchButton from './SearchButton'
import MacroGoalCountdown from './MacroGoalCountdown';
import MicroGoalCountdown from './MicroGoalCountdown';
import Piechart from '../visualizations/PieChart'
import { addFoodDayN, removeFoodDayN } from '../../store'
import { Button, Icon } from 'semantic-ui-react'


class DayCard extends Component {

  constructor() {
    super()
    this.state = {
      showDetails: false
    }
    this.toggleDetails = this.toggleDetails.bind(this)
  }

  componentWillMount() {
    if (this.props.dayN === 0) this.setState({ showDetails: true })
  }

  toggleDetails() {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {

    const { dayN, foodsDayN } = this.props

    const foods = foodsDayN.find(day => day.day === dayN)

    return this.state.showDetails ?
    (
      <div style={container}>

        <div style={width}>
          <div style={meal}>
            <div style={breakfast}>
              <p>Breakfast</p>
              <Button icon size='mini' onClick={this.toggleDetails} circular={true} style={minus}>
                <Icon name='window minimize' />
              </Button>
            </div>
            <div>
              <ul>
                {foods.breakfast.length && foods.breakfast.map(food =>
                  <li key={food.name}>{food.name}</li>
                  // <li key={food.report.food.ndbno}>{food.report.food.name}</li>
                )}
              </ul>
            </div>
            <SearchButton meal="breakfast" dayN={dayN} />
          </div>

          <div style={meal}>
            <div>
              <p>Lunch</p>
            </div>
            <div>
              <ul>
                {foods.lunch.length && foods.lunch.map(food =>
                  <li key={food.name}>{food.name}</li>
                )}
              </ul>
            </div>
            <SearchButton meal="lunch" dayN={dayN} />
          </div>

          <div style={meal}>
            <div>
              <p>Dinner</p>
            </div>
            <div>
              <ul>
                {foods.dinner.length && foods.dinner.map(food =>
                  <li key={food.name}>{food.name}</li>
                )}
              </ul>
            </div>
            <SearchButton meal="dinner" dayN={dayN} />
          </div>

          <div style={meal}>
            <div>
              <p>Snacks</p>
            </div>
            <div>
              <ul>
                {foods.snacks.map(food =>
                  <li key={food.name}>{food.name}</li>
                )}
              </ul>
            </div>
            <SearchButton meal="snacks" dayN={dayN} />
          </div>
        </div>

      </div>
    ) : (
      <div style={square} onClick={this.toggleDetails}>

      </div>
    )
  }

}

const mapState = state => {
  return {
    foodsDayN: state.foodsDayN
  }
}

const mapDispatch = null

export default connect(mapState, mapDispatch)(DayCard)

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
  }
}

const { container, meal, square, minus, breakfast, width } = styles

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import SearchButton from './SearchButton'
import MacroGoalCountdown from './MacroGoalCountdown';
import MicroGoalCountdown from './MicroGoalCountdown';
import { addFoodDayN, removeFoodDayN } from '../../store'


class DayCard extends Component {

  render() {

    const { dayN, foodsDayN } = this.props

    const foods = foodsDayN.find(day => day.day === dayN)

    return (
      <div style={container}>

        <div>

          <div style={meal}>
            <div>
              <p>Breakfast</p>
            </div>
            <div>
              <ul>
                {foods.breakfast.map(food =>
                  <li key={food.report.food.ndbno}>{food.report.food.name}</li>
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
              <button>+</button>
            </div>
          </div>

          <div style={meal}>
            <div>
              <p>Dinner</p>
            </div>
            <div>
              <button>+</button>
            </div>
          </div>

          <div style={meal}>
            <div>
              <p>Snacks</p>
            </div>
            <div>
              <button>+</button>
            </div>
          </div>

        </div>

      </div>
    )
  }

}

const mapState = (state, ownProps) => {
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
    border: '1px solid black'
  }
}

const { container, meal } = styles

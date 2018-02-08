import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { DayCard, GroceryList } from './index'
import MacroPieChartContainer from './MacroPieChartContainer';

class AllDays extends Component {

  constructor(){
    super()
    this.state = {
      day0: {
        showDetails: false,
        shrink: false
      },
      day1: {
        showDetails: false,
        shrink: false
      },
      day2: {
        showDetails: false,
        shrink: false
      },
      day3: {
        showDetails: false,
        shrink: false
      },
      day4: {
        showDetails: false,
        shrink: false
      }
    }
    this.toggleDayN = this.toggleDayN.bind(this)
  }

  toggleDayN(dayN) {
    this.setState({
      [dayN]: {
        showDetails: !(this.state[dayN].showDetails),
        shrink: false
      }
    }, () => {
      const state = this.state
      const keys = Object.keys(state)
      if (this.state[dayN].showDetails === true){
        keys.forEach(key => {
          if (key !== dayN){
            this.setState({
              [key]: {
                showDetails: false,
                shrink: true
              }
            })
          }
        })
      } else if (this.state[dayN].showDetails === false){
        keys.forEach(key => {
          if (key !== dayN){
            this.setState({
              [key]: {
                showDetails: false,
                shrink: false
              }
            })
          }
        })
      }
    })
  }

  render() {

    const { day0, day1, day2, day3, day4 } = this.state
    const { foodsDayN } = this.props

    let protein = 0, carbs = 0, fat = 0
    foodsDayN.forEach(day => {
      day.breakfast.forEach(food => {
        protein += food.protein
        carbs += food.carbs
        fat += food.fat
      })
      day.lunch.forEach(food => {
        protein += food.protein
        carbs += food.carbs
        fat += food.fat
      })
      day.dinner.forEach(food => {
        protein += food.protein
        carbs += food.carbs
        fat += food.fat
      })
      day.snacks.forEach(food => {
        protein += food.protein
        carbs += food.carbs
        fat += food.fat
      })
    })

    const renderPieChart = (protein + carbs + fat) > 0

    return (
      <div style={container}>
        <div style={daysContainer}>
          <DayCard dayN={0} shrink={day0.shrink} toggleDayN={this.toggleDayN} />
          <DayCard dayN={1} shrink={day1.shrink} toggleDayN={this.toggleDayN} />
          <DayCard dayN={2} shrink={day2.shrink} toggleDayN={this.toggleDayN} />
          <DayCard dayN={3} shrink={day3.shrink} toggleDayN={this.toggleDayN} />
          <DayCard dayN={4} shrink={day4.shrink} toggleDayN={this.toggleDayN} />
        </div>
        {renderPieChart ?
          <div style={pieChartContainer}>
            <MacroPieChartContainer protein={protein} carbs={carbs} fat={fat} />
          </div>
        : null}

      </div>
    )
  }
}

const mapState = state => {
  return {
    foodsDayN: state.foodsDayN
  }
}

const mapDispatch = dispatch => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapState, mapDispatch)(AllDays)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  pieChartContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  daysContainer: {
    display: 'flex',
    position: 'relative',
    left: '23vw',
    top: '10vh'
  }
}

const { container, pieChartContainer, daysContainer } = styles

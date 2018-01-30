import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import MacroGoalCountdown from './MacroGoalCountdown';
import MicroGoalCountdown from './MicroGoalCountdown';
import axios from 'axios'
import { fetchUsdaSearchMatches, fetchUsdaFoodReport } from '../../store'


class SearchButton extends Component {

  constructor() {
    super()
    this.state = {
      showSearchBar: false,
      searchValue: ''
    }
    this.toggleSearchBar = this.toggleSearchBar.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // show or hide search bar via '+' button
  toggleSearchBar() {
    this.setState({
      showSearchBar: !this.state.showSearchBar
    })
  }

  // set state to reflect user input changes
  handleChange (event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  }


  render() {

    const { fetchUsdaSearchMatches, fetchUsdaFoodReport, foodMatches, foodReport, dayN, meal } = this.props

    return (
      <div>
        <button onClick={this.toggleSearchBar}>+</button>
        {
          this.state.showSearchBar &&
          <div>
            <input name="searchValue" value={this.state.searchValue} onChange={this.handleChange} />
            <button onClick={() => fetchUsdaSearchMatches(this.state.searchValue)}>Search!</button>
            <div style={optionsContainer}>
            {
              foodMatches.length &&
              foodMatches.map(food => {
                return (
                  <div
                    onClick={() => {
                      console.log('food', food.ndbno)
                      fetchUsdaFoodReport(food.ndbno, dayN, meal)
                    }}
                    style={option} key={food.name}>{food.name}</div>
                )
              })
            }
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapState = state => {
  return {
    foodMatches: state.foodsSearchUSDA.foodMatches,
    foodReport: state.foodsSearchUSDA.foodReport
  }
}

const mapDispatch = dispatch => {
  return bindActionCreators({
    fetchUsdaSearchMatches, fetchUsdaFoodReport
  }, dispatch)
}

export default connect(mapState, mapDispatch)(SearchButton)

const styles = {
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  option: {
    border: '2px solid blue',
  }
}

const { optionsContainer, option } = styles

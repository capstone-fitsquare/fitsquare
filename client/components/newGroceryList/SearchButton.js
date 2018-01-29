import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import MacroGoalCountdown from './MacroGoalCountdown';
import MicroGoalCountdown from './MicroGoalCountdown';


class SearchButton extends Component {

  constructor() {
    super()
    this.state = {
      showSearchBar: false,
      searchValue: '',
      foodsFound: []
    }
    this.toggleSearchBar = this.toggleSearchBar.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleAddFood = this.handleAddFood.bind(this)
  }

  toggleSearchBar() {
    this.setState({
      showSearchBar: !this.state.showSearchBar
    })
  }

  handleChange (event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  }

  handleAddFood(event) {
    event.preventDefault()
    const foodToSearch = this.state.searchValue
    const foods = [...this.props.foodItems.find(foodItem => {
      return foodItem === foodToSearch
    })]
    this.setState({
      foodsFound: foods
    })
  }

  handleSubmit (event) {

  }


  render() {
    return (
      <div>
        <button onClick={this.toggleSearchBar}>+</button>
        {
          this.state.showSearchBar &&
          <div>
            <input name="searchValue" value={this.state.searchValue} onChange={this.handleChange} />
            <button onClick={this.handleAddFood}>Go!</button>
            {
              this.state.foodsFound.length &&
              this.state.foodsFound.map(food => {
                return (
                  <div key={food.name}>{food.name}</div>
                )
              })
            }
          </div>
        }
      </div>
    )
  }
}

const mapState = state => {
  return {
    foodItems: state.foodItems
  }
}

const mapDispatch = null

export default connect(mapState, mapDispatch)(SearchButton)

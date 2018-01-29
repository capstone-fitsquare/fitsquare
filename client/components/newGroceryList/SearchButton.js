import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import MacroGoalCountdown from './MacroGoalCountdown';
import MicroGoalCountdown from './MicroGoalCountdown';
import axios from 'axios'


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
    this.handleSearchFood = this.handleSearchFood.bind(this)
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

  // uses this.state.searchValue to search USDA db for food
  // adds found foods to this.state.foodsFound array
  handleSearchFood(event) {
    event.preventDefault()
    const searchTerms = this.state.searchValue
    console.log('searchTerms ', searchTerms)
    axios.get(`/api/usda-db/search/${searchTerms}`)
    .then(res => res.data)
    .then(data => {
      console.log('search data ', data)
      this.setState({
        foodsFound: data.list.item
      })
    })
  }

  // 1) add food to the appropriate meal
  // 2) subtract the associated macro/micro amounts from the countdowns
  //    - another API call using the ndbno
  handleSelectFood(food) {
    this.props.handleAddFood(food)
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
            <button onClick={this.handleSearchFood}>Go!</button>
            <div style={optionsContainer}>
            {
              this.state.foodsFound.length &&
              this.state.foodsFound.map(food => {
                return (
                  <div onClick={() => this.handleSelectFood(food)} style={option} key={food.name}>{food.name}</div>
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
    foodItems: state.foodItems
  }
}

const mapDispatch = null

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
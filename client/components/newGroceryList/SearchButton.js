import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import store, { fetchUsdaSearchMatches, fetchUsdaFoodReport, getUsdaSearchMatches, getUsdaFoodReport } from '../../store'
import Select, { Async } from 'react-select-plus'
import axios from 'axios'


class SearchButton extends Component {

  constructor() {
    super()
    this.state = {
      showSearchBar: false,
      searchValue: null
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
  handleChange (value) {
    this.setState({
      searchValue: value
    })
  }

  render() {

    const { fetchUsdaSearchMatches, fetchUsdaFoodReport, dayN, meal } = this.props
    if (this.state.searchValue) fetchUsdaSearchMatches(this.state.searchValue)

    const addFoodToMealAndList = (value) => {
      fetchUsdaFoodReport(value.ndbno, dayN, meal)
    }

    return (
      <div>
        <button onClick={this.toggleSearchBar}>+</button>
        {
          this.state.showSearchBar &&

          <div>
            <Async
              placeholder="Search food"
              value={this.state.searchValue}
              onChange={this.handleChange}
              loadOptions={loadOptions}
              valueKey="ndbno" labelKey="name"
              multi={false}
              closeOnSelect={true}
              onValueClick={addFoodToMealAndList}
            />
            <button onClick={addFoodToMealAndList}>Add Food</button>
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

const loadOptions = (input) => {
  if (!input) return Promise.resolve({ options: [] });

  return axios.get(`/api/usda-db/search/${input}`) // eventually, searchTerms needs to allow multiple words
    .then(res => res.data)
    .then(foodMatches => {
      const matches = foodMatches.list.item.map(food => {
        return {
          offset: food.offset,
          name: food.name,
          ndbno: food.ndbno
        }
      })
      const action = getUsdaSearchMatches(matches)
      store.dispatch(action)
      return { options: matches }
    })
    .catch(err => console.log(err))
}

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



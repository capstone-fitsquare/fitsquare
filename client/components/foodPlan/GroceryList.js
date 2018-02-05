import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { AllDays } from '../../components'
import { postGroceryList, addFoodToGroceryList, removeFoodFromGroceryList } from '../../store'
import axios from 'axios'

class GroceryList extends Component {

  constructor () {
    super()
    this.state = {
      showGroceryList: false,
    }
    this.toggleGroceryList = this.toggleGroceryList.bind(this)
  }

  toggleGroceryList (event) {
    this.setState({
      showGroceryList: !this.state.showGroceryList
    })
  }

  render() {

    const groceryList = Array.from(new Set(this.props.groceryList))

    return (
      <div>
        <h4>Grocery List</h4>
        <ul>
          {groceryList.length && groceryList.map(ingredient =>
            <li key={ingredient}>{ingredient}</li>
          )}
        </ul>
      </div>
    )
  }
}

const mapState = state => {
  return {
    groceryList: state.foodsGroceryList
  }
}

const mapDispatch = dispatch => {
  return bindActionCreators({

  },
  dispatch)
}

export default connect(mapState, mapDispatch)(GroceryList)

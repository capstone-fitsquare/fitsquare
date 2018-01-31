import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { AllDays } from '../../components'
import { postGroceryList, addFoodToGroceryList, removeFoodFromGroceryList } from '../../store'
import axios from 'axios'

class GroceryListForm extends Component {

  constructor () {
    super()
    this.state = {
      name: 'Grocery List Name',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGroceryList = {...this.state}
    this.props.postGroceryList(newGroceryList)
  }

  render() {

    const { foodsGroceryList } = this.props

    return (
      <div>

        <div>
          <AllDays />
          <form>
            <label>Name of Grocery List</label>
            <input name="name" value={this.state.name} onChange={this.handleChange} />
              {foodsGroceryList.length &&
                <ul>
                {foodsGroceryList.map(foodObj => {
                  const name = foodObj.report.food.name
                  const ndbno = foodObj.report.food.ndbno
                  return (
                    <li key={ndbno}>{name}</li>
                  )}
                )}
                </ul>
              }
          </form>
        </div>

      </div>
    )
  }
}

const mapState = state => {
  return {
    foodsGroceryList: state.foodsGroceryList
  }
}

const mapDispatch = dispatch => {
  return bindActionCreators({
    addFoodToGroceryList, removeFoodFromGroceryList, postGroceryList
  },
  dispatch)
}

export default connect(mapState, mapDispatch)(GroceryListForm)

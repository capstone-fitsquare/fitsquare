import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { DayCard } from '../../components'
import { postGroceryList } from '../../store'
import axios from 'axios'

class GroceryListForm extends Component {

  constructor () {
    super()
    this.state = {
      name: 'Grocery List Name',
      foods: [{name: 'apple'}, {name: 'banana'}]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAddFood = this.handleAddFood.bind(this)
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

  handleAddFood(food) {
    const addedFood = [...this.state.foods, food]
    this.setState({
      foods: addedFood
    })
    axios.get(`/api/usda-db/reports/${food.ndbno}`)
    .then(res => res.data)
    .then(data => {
      console.log('ndbno data', data)
    })
  }

  render() {

    return (
      <div>

        <div>
          <DayCard handleAddFood={this.handleAddFood}/>
          <form>
            <label>Name of Grocery List</label>
            <input name="name" value={this.state.name} onChange={this.handleChange} />
              {this.state.foods.length &&
                <ul>
                {this.state.foods.map(food =>
                  <li key={food.name}>{food.name}</li>
                )}
                </ul>
              }
          </form>
        </div>

      </div>
    )
  }
}

const mapState = null

const mapDispatch = dispatch => {
  return bindActionCreators({
    postGroceryList
  },
  dispatch)
}

export default connect(mapState, mapDispatch)(GroceryListForm)

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { AllDays } from '../../components'
import { postGroceryList, addFoodToGroceryList, removeFoodFromGroceryList } from '../../store'
import axios from 'axios'
import Twilio from './Twilio'

class GroceryList extends Component {

  constructor () {
    super()
    this.state = {
      showGroceryList: false,
      showTextForm: false
    }
    this.toggleGroceryList = this.toggleGroceryList.bind(this)
    this.toggleTextForm = this.toggleTextForm.bind(this)
  }

  toggleGroceryList (event) {
    this.setState({
      showGroceryList: !this.state.showGroceryList,
    })
  }

  toggleTextForm (event) {
    this.setState({
      showTextForm: !this.state.showTextForm,
    })
  }

  render() {

    const groceryList = Array.from(new Set(this.props.groceryList))
    const { showGroceryList, showTextForm } = this.state

    const cssClass = showGroceryList ? 'active' : ''

    return groceryList.length ? (
      <div id="grocery-list" style={groceries} className={cssClass} onClick={this.toggleGroceryList}>
        <div style={list}>Grocery List</div>
        <ul>
          {groceryList.map(ingredient =>
            <li key={ingredient}>{ingredient}</li>
          )}
        </ul>
        <button onClick={this.toggleTextForm}>Text Grocery List</button>
        {showTextForm ?
          <Twilio groceryList={groceryList} />
        : null }
      </div>
    ) : null
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

const styles = {
  groceries: {
    boxShadow: '0px 2px 4px rgba(0,0,0,0.18)',
    padding: '3em 4em 2em 4em',
    background: 'white',
  },
  list: {
    fontSize: '48px',
    paddingBottom: '.8em'
  }
}

const { groceries, list } = styles

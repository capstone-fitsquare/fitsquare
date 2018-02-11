import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { withRouter, NavLink } from 'react-router-dom'
import AllDays from './AllDays'
import RecipesContainer from './recipes/RecipesContainer'
import { addFoodToGroceryList } from '../../store'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import { DragDropContextProvider } from 'react-dnd'
import MacroPieChartContainer from './MacroPieChartContainer'
import GroceryList from './GroceryList'
import Navbar from '../Navbar'


class FoodPlanWrapper extends Component {

  constructor () {
    super()
    this.state = {
      visible: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {

    const { visible } = this.state

    const cssClass = visible ? 'appear' : ''

    return (
      <div>
        <div id="foodPlanWrapper">
          <Navbar />
          <GroceryList />
          <div id="recipe-bar">
            <img id="recipes-tab" className={cssClass} src='/images/recipe.png' onClick={this.toggleVisibility} />
            <div id="recipes-container" className={cssClass}>
              <RecipesContainer />
            </div>
          </div>
          <AllDays />
        </div>
        <NavLink to="/cal">Schedule my Meals</NavLink>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(FoodPlanWrapper)

const styles = {
  pushableDiv: {
    height: '84vh',
  },
  sidebar: {
    width: '20vw'
  }
}

const { pushableDiv, sidebar } = styles

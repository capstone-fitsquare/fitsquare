import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'
import AllDays from './AllDays'
import RecipesContainer from './recipes/RecipesContainer'
import { addFoodToGroceryList } from '../../store'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import { DragDropContextProvider } from 'react-dnd'
import MacroPieChartContainer from './MacroPieChartContainer'
import GroceryList from './GroceryList'


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

    return (
        <div id="foodPlanWrapper">
          <GroceryList />
          <Button onClick={this.toggleVisibility}>Recipes</Button>
          <Sidebar.Pushable as={Segment} style={pushableDiv}>
            <Sidebar animation="overlay" visible={visible} style={sidebar}>
              <RecipesContainer />
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                <AllDays />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
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

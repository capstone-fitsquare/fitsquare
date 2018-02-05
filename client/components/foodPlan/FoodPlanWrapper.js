import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'
import AllDays from './AllDays'
import RecipesContainer from './recipes/RecipesContainer'
import { addFoodToGroceryList } from '../../store'


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
        <Button onClick={this.toggleVisibility}>Recipes</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar animation='push' visible={visible}>
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

const mapState = state => {
  return {
    groceryList: state.foodsGroceryList
  }
}
const mapDispatch = dispatch => {
  return bindActionCreators({

  }, dispatch)
}

export default withRouter(connect(mapState, mapDispatch)(FoodPlanWrapper))

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    margin: '2em 8em 0em 8em',
    display: 'flex',
    justifyContent: 'center'
  },
  preferencesParent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
    margin: '1em',
    alignItems: 'center'
  },
}

const { container, header, preferencesParent } = styles

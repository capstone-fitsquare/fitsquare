import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'
import Recipes from './Recipes'

class RecipeNav extends Component {

  constructor () {
    super()
    this.state = {
      activeIndex: 0
    }
    this.handleMeal = this.handleMeal.bind(this)
  }

  handleMeal(meal) {
    let index
    switch(meal){
      case 'breakfast':
        index = 0
        break
      case 'lunch':
        index = 1
        break
      case 'dinner':
        index = 2
      case 'snacks':
        index = 3
    }

    this.setState({
      activeIndex: index
    })
  }

  render() {

    const { activeIndex } = this.state
    const { recipes } = this.props
    const breakfastRecipes = recipes.filter(recipe => recipe.meal === 'breakfast')
    const lunchRecipes = recipes.filter(recipe => recipe.meal === 'lunch')
    const dinnerRecipes = recipes.filter(recipe => recipe.meal === 'dinner')
    const snackRecipes = recipes.filter(recipe => recipe.meal === 'snack')

    const panes = [
      // { menuItem: 'All', render: () => <Tab.Pane loading={false}><Recipes /></Tab.Pane> },
      // { menuItem: 'Breakfast', render: () => <Tab.Pane><Recipes recipes={breakfastRecipes} /></Tab.Pane> },
      // { menuItem: 'Lunch', render: () => <Tab.Pane><Recipes recipes={lunchRecipes} /></Tab.Pane> },
      // { menuItem: 'Dinner', render: () => <Tab.Pane><Recipes recipes={dinnerRecipes} /></Tab.Pane> },
      // { menuItem: 'Snacks', render: () => <Tab.Pane><Recipes recipes={snackRecipes} /></Tab.Pane> },
      // { menuItem: 'Favorites', render: () => <Tab.Pane><Recipes meal="breakfast" /></Tab.Pane> },
    ]

    return (
      <div style={container}>
        <div style={{ letterSpacing: '1px' }}>BREAKFAST</div>
          <div>
            <Recipes recipes={breakfastRecipes} />
          </div>
        <div style={{ letterSpacing: '1px' }}>LUNCH</div>
          <div>
            <Recipes recipes={lunchRecipes} />
          </div>
        <div style={{ letterSpacing: '1px' }}>DINNER</div>
          <div>
            <Recipes recipes={dinnerRecipes} />
          </div>
        <div style={{ letterSpacing: '1px' }}>SNACKS</div>
          <div>
            <Recipes recipes={snackRecipes} />
          </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    recipes: state.recipes
  }
}
const mapDispatch = dispatch => {
  return bindActionCreators({

  }, dispatch)
}

export default withRouter(connect(mapState, mapDispatch)(RecipeNav))

const styles = {
  container: {
    position: 'fixed',
    left: '0',
    width: '20vw',
    height: '100%',
    background: '#c580f7',
    color: '#e5d7ef',
    padding: '2em',
  },
  tabStyle: {
    display: 'flex',
  }
}

const { container, tabStyle } = styles

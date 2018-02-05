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
    this.handleTabChange = this.handleTabChange.bind(this)
  }

  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })

  render() {

    const { activeIndex } = this.state
    console.log('activeIndex', activeIndex)

    const { breakfastRecipes, lunchRecipes, dinnerRecipes, snackRecipes } = this.props

    const panes = [
      // { menuItem: 'All', render: () => <Tab.Pane loading={false}><Recipes /></Tab.Pane> },
      { menuItem: 'Breakfast', render: () => <Tab.Pane><Recipes recipes={breakfastRecipes} /></Tab.Pane> },
      { menuItem: 'Lunch', render: () => <Tab.Pane><Recipes recipes={lunchRecipes} /></Tab.Pane> },
      { menuItem: 'Dinner', render: () => <Tab.Pane><Recipes recipes={dinnerRecipes} /></Tab.Pane> },
      { menuItem: 'Snacks', render: () => <Tab.Pane><Recipes recipes={snackRecipes} /></Tab.Pane> },
      // { menuItem: 'Favorites', render: () => <Tab.Pane><Recipes meal="breakfast" /></Tab.Pane> },
    ]

    return (
      <Tab panes={panes} activeIndex={activeIndex} onTabChange={this.handleTabChange} />
    )
  }
}

const mapState = state => {
  return {
    breakfastRecipes: state.yummlySearch.breakfastMatches.matches,
    lunchRecipes: state.yummlySearch.lunchMatches.matches,
    dinnerRecipes: state.yummlySearch.dinnerMatches.matches,
    snackRecipes: state.yummlySearch.snackMatches.matches
  }
  // return {
  //   breakfastRecipes: state.recipes.filter(recipe => recipe.meal === 'breakfast'),
  //   lunchRecipes: state.recipes.filter(recipe => recipe.meal === 'lunch'),
  //   dinnerRecipes: state.recipes.filter(recipe => recipe.meal === 'dinner'),
  //   snackRecipes: state.recipes.filter(recipe => recipe.meal === 'snack'),
  // }
}
const mapDispatch = dispatch => {
  return bindActionCreators({

  }, dispatch)
}

export default withRouter(connect(mapState, mapDispatch)(RecipeNav))

const styles = {
  container: {
    display: 'flex',
  },
  tabStyle: {
    display: 'flex',
  }
}

const { container, tabStyle } = styles

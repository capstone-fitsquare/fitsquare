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
    }, () => {
      switch(this.state.activeIndex){
        case 0:
          index = 0
          break
        case 1:
          index = 1
          break
        case 2:
          index = 2
        case 3:
          index = 3
      }
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
        <div style={tabContainer}>
          <div style={tab} onClick={() => this.handleMeal('breakfast')}>B</div>
          <div style={tab} onClick={() => this.handleMeal('lunch')}>L</div>
          <div style={tab} onClick={() => this.handleMeal('dinner')}>D</div>
          <div style={tab} onClick={() => this.handleMeal('snacks')}>S</div>
        </div>
        <div>
        {activeIndex === 0 ?
          <Recipes recipes={breakfastRecipes} />
        : null}

        {activeIndex === 1 ?
          <Recipes recipes={lunchRecipes} />
        : null}

        {activeIndex === 2 ?
          <Recipes recipes={dinnerRecipes} />
        : null}

        {activeIndex === 3 ?
          <Recipes recipes={snackRecipes} />
        : null}
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
    width: '20vw',
    height: '100vh',
    background: '#c580f7',
    color: '#eafffb',
    textShadow: '(0,0,0,0.18)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.18)'
  },
  tabContainer: {
    display: 'flex',
    paddingLeft: '9.5px',
    paddingRight: '20px',
    paddingTop: '12px',
    background: 'lightyellow'
  },
  tab: {
    display: 'flex',
    boxShadow: '0 2px 4px rgba(0,0,0,0.18)',
    padding: '.5em',
    height: '51px',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'calc((20vw - .4vw) / 4 )',
    background: 'lightgreen',
    borderRadius: '12px 12px 0 0'
  }
}

const { container, tabContainer, tab } = styles

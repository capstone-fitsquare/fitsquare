import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'
import RecipeNav from './RecipeNav';
import Recipes from './Recipes'

class RecipesContainer extends Component {

  constructor () {
    super()
    this.state = {
      breakfast: false,
      lunch: false,
      dinner: false,
      snacks: false,
      favorites: false
    }
    this.toggleRecipeMeal = this.toggleRecipeMeal.bind(this)
  }

  toggleRecipeMeal (currentMeal, nextMeal) {
    this.setState({
      [currentMeal]: false,
      [nextMeal]: true
    })
  }

  render() {

    return (
      <div>
        <RecipeNav />
      </div>
    )
  }
}

export default RecipesContainer

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

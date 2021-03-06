import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import { addFoodToGroceryList } from '../../../store'
import RecipeImg from './RecipeImg'

class Recipes extends Component {

  constructor(){
    super()
    this.addRecipe = this.addRecipe.bind(this)
  }

  addRecipe(recipe) {
    recipe.ingredients.forEach(ingredient => this.props.addFoodToGroceryList(ingredient))
  }

  render() {

    const { recipes } = this.props

    return (
      <div>
        {recipes.length ? recipes.map(recipe => {
          return (
            <div key={recipe.id} style={recipeContainer}>
              <h4>{recipe.recipeName}</h4>
              <RecipeImg
                id={recipe.id}
                name={recipe.recipeName}
                src={recipe.smallImageUrls[0]}
                meal={recipe.meal}
                calories={recipe.calories}
                protein={recipe.protein}
                carbs={recipe.carbs}
                fat={recipe.fat}
                ingredients={recipe.ingredients}
              />
            </div>
          )
        }) : null }
      </div>
    )
  }
}

const mapState = null

const mapDispatch = dispatch => {
  return bindActionCreators({
    addFoodToGroceryList
  }, dispatch)
}

export default connect(mapState, mapDispatch)(Recipes)

const styles = {
  recipeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1em',
    margin: '1em'
  },
}

const { recipeContainer } = styles

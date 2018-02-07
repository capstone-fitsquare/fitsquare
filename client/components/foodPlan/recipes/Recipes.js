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
    recipes ? console.log('recipes[0]', recipes[0]) : console.log('waiting')

    return (
      <div>
        {recipes.length ? recipes.map(recipe => {
          return (
            <div key={recipe.id}>
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
              <Button onClick={() => this.addRecipe(recipe)}>Add to plan</Button>
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

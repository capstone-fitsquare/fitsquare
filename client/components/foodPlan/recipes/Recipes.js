import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import { addFoodToGroceryList, fetchYummlyRecipeDetails } from '../../../store'

class Recipes extends Component {

  constructor(){
    super()
    this.addRecipe = this.addRecipe.bind(this)
  }


  componentWillReceiveProps(nextProps){
    const { fromDb } = this.props
    let recipeId
    if (fromDb) recipeId = 'yummlyId'
    else recipeId = 'id'
    if (this.props.recipes !== nextProps.recipes) {
      const { fetchYummlyRecipeDetails, meal } = this.props
      const { recipes } = nextProps
      console.log('recipes', recipes)
      Promise.all(recipes.map(recipe => {
        fetchYummlyRecipeDetails(recipe[recipeId], meal)
      }))
    }
  }

  addRecipe(recipe) {
    recipe.ingredients.forEach(ingredient => this.props.addFoodToGroceryList(ingredient))
  }

  render() {

    const { recipes } = this.props
    console.log('recipes', recipes)

    return (
      <div>
        {recipes.length && recipes.map(recipe => {
          return (
            <div id={recipe.id} key={recipe.id}>
              <h4>{recipe.recipeName}</h4>
              <img id={`${recipe.id}-IMG`} src={recipe.smallImageUrls[0]} />
              <Button onClick={() => this.addRecipe(recipe)}>Add to plan</Button>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  if (ownProps.recipes) return { recipes: ownProps.recipes, fromDb: false }
  else return { recipes: state.recipes, fromDb: true }
}
const mapDispatch = dispatch => {
  return bindActionCreators({
    addFoodToGroceryList, fetchYummlyRecipeDetails
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

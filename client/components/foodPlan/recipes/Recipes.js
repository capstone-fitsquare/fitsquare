import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'
import fetchYummlySearchMatches from '../../../store'

class Recipes extends Component {

  render() {

    const recipes = this.props

    return (
      <div>
        {recipes.length && recipes.map(recipe => {
          return (
            <div>
              <div key={recipe.id}>{recipe.recipeName}</div>
              <img src={img.smallImageUrls[0]} />
            </div>
          )
        })}
      </div>
    )
  }
}


export default Recipes

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

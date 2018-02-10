import React, { Component } from 'react';
// import axios from 'axios'
import Datetime from 'react-datetime';
// import insertEventToCal from '../../../public/quickstart.html'
// var insertEventToCal = require('../../../public/quickstart.html')
import { Input, Button, Grid, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import moment from 'moment';
import Select from 'react-select';

class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      end: {
        "dateTime": "",
        "timeZone": ""
      },
      start: {
        "dateTime": "",
        "timeZone": ""
      },
      // recurrence: [
      //   "RRULE:FREQ=DAILY;COUNT=2"
      // ],
      summary: "",
      // location: "Death Valley",
      // description: "",
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      selectedRecipes: [],
      // "attendees": [
      //   {"email": "lpage@example.com"},
      //   {"email": "sbrin@example.com"}
      // ],
      reminders: {
        "useDefault": false,
        "overrides": [
          {"method": "email", "minutes": 24 * 60},
          {"method": "popup", "minutes": 10}
        ]
      }
     }
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.onMealChange = this.onMealChange(this)
  }

  componentDidMount(){
    handleClientLoad()
  }

  handleSubmit(event){
    event.preventDefault()
    const state = this.state
    const summary = state.selectedRecipes.map(rec => rec.value.recipeName).join(", ");
    const description = `Calories: ${state.calories} \nProtein: ${state.protein} \nCarbs: ${state.carbs} \nFat: ${state.fat} \n`
    // handleClientLoad()
    const meal = {
      end: state.end,
      start: state.start,
      summary,
      description,
      reminders: {
        "useDefault": false,
        "overrides": [
          {"method": "email", "minutes": 24 * 60},
          {"method": "popup", "minutes": 10}
        ]
      }
    }
    console.log("meal log: ", meal)
    // insertEventToCal(meal)
  }

  render() {
    const recipes = this.props.recipes
    const nameMap = recipes.map(recipe => {
      return {value: recipe, label: recipe.recipeName}
    })

    const renderers = {
      renderDay: function( props, currentDate, selectedDate ){
        return <td {...props}>{ currentDate.date() }</td>;
      },
      renderMonth: function( props, month, year, selectedDate){
        return <td {...props}>{ month }</td>;
      },
      renderYear: function( props, year, selectedDate ){
        return <td {...props}>{ year % 100 }</td>;
      }
    }
  return (
    <div>
      <div className="meal-schedule-form">
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="top">
          <Grid.Column width={4}>
          <h3>Select a Recipe</h3>
          <Select
            name="mealChange"
            multi={true}
            placeHolder={`When do you want to eat?`}
            onChange={(recObj) => {
              const selected = recObj.map(rec => rec)

              const mapCals = selected.map(rec => rec.value.calories).reduce((acc, val) => acc + val).toFixed();
              const mapProtein = selected.map(rec => rec.value.protein).reduce((acc, val) => acc + val).toFixed();
              const mapCarbs = selected.map(rec => rec.value.carbs).reduce((acc, val) => acc + val).toFixed();
              const mapFat = selected.map(rec => rec.value.fat).reduce((acc, val) => acc + val).toFixed();

              const newState = {
                selectedRecipes: selected,
                calories: mapCals,
                protein: mapProtein,
                carbs: mapCarbs,
                fat: mapFat
              }
              return this.setState(newState)
            }}
              options={nameMap}
              value={ this.state.selectedRecipes }
            />
            <h3>Select a Time</h3>
            <div className="Datetime-input">
              <Datetime
              input={false}
              utc={true}
              renderDay={ renderers.renderDay }
              renderMonth={ renderers.renderMonth }
              renderYear={ renderers.renderYear }
              onChange={(mom) => {
                const start = mom._d.toISOString().slice(0, -5);
                const end = moment(mom._d).add(15, 'm')._d.toISOString().slice(0, -5);
                this.setState({
                  start: {
                    "dateTime": start,
                    "timeZone": "America/New_York"
                  },
                  end: {
                    "dateTime": end,
                    "timeZone": "America/New_York"
                  }
                })
              }}
              />
            </div>
            <form size="large" onSubmit={this.handleSubmit} name="calAuth">
              <Segment stacked>
                <Button type="Schedule">Schedule A Meal</Button>
              </Segment>
            </form>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
  }
}


const mapState = state => {
  return {
    foodsDayN: state.foodsDayN,
    groceryList: state.foodsGroceryList,
    recipes: state.recipes
  }
}


export default connect(mapState)(Calendar);


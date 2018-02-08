import React, { Component } from 'react';
// import axios from 'axios'
import Datetime from 'react-datetime';
// import insertEventToCal from '../../../public/quickstart.html'
// var insertEventToCal = require('../../../public/quickstart.html')
import { Input, Button, Grid, Segment } from 'semantic-ui-react';

class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      end: {
        "dateTime": "2018-02-20T09:00:00-07:00",
        "timeZone": "America/Los_Angeles"
      },
      start: {
        "dateTime": "2018-02-17T09:00:00-07:00",
        "timeZone": "America/Los_Angeles"
      },
      recurrence: [
        "RRULE:FREQ=DAILY;COUNT=2"
      ],
      summary: "Tim Bourret is the man",
      location: "Death Valley",
      description: "The Greatest 25 Seconds in College Football",
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
  }

  handleSubmit(){
    console.log("state: ", this.state)
    handleClientLoad()
    insertEventToCal(this.state)
  }

  render() {
    var renderers = {
      renderDay: function( props, currentDate, selectedDate ){
        return <td {...props}>{ '0' + currentDate.date() }</td>;
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
      {
        // console.log('insertEventFunc: ', insertEventToCal)
        // console.log('the gapi: ', gapi)
        // insertEventToCal(resource)
        // console.log('resource: ', resource)
      }

      <div className="login-form">
      <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
        <Grid.Column>
          <form size="large" onSubmit={this.handleSubmit} name="calAuth">
            <Segment stacked>
              <Button type="Authorize">Authorize</Button>

              </Segment>
          </form>
        </Grid.Column>
      </Grid>
      </div>
      <Datetime // input={false}
      // renderDay={ renderers.renderDay }
      // renderMonth={ renderers.renderMonth }
      // renderYear={ renderers.renderYear }
      />
      </div>
    )
  }
}


export default Calendar;

import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Segment, Form } from 'semantic-ui-react';
import './test.css';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { phonenumber: '', submittedphonenumber: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, { phonenumber, value }) {
    this.setState({ [phonenumber]: value });
  }

  handleSubmit() {
    axios
      .post('/api/send', {
        body: this.state.phonenumber,
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  render() {
    const { phonenumber } = this.state;

    return (
      <Grid columns={1} stackable textAlign="center">
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Form onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Group id="form-group" inline>
                <label>Phone Number</label>
                <Form.Input
                  placeholder="+12223334444"
                  phonenumber="phonenumber"
                  value={phonenumber}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Button id="form-group-button" content="Submit" />
            </Segment>
          </Form>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid>
    );
  }
}

export default Test;

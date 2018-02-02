import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

class GenerateFoodPlan extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/all-days')
    }, 1000);
  }

  render() {
    return (
      <div style={container}>
        <div style={header}>
          <p>...Generating Food Plan...</p>
        </div>
      </div>
    )
  }
}

export default withRouter(GenerateFoodPlan)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    margin: '4em 8em',
    display: 'flex',
    justifyContent: 'center'
  },
}

const { container, header } = styles

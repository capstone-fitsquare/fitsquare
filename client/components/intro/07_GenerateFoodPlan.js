import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'


class GenerateFoodPlan extends Component {

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

export default GenerateFoodPlan

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

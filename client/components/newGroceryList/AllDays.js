import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import DayCard from './DayCard'

const AllDays = (props) => {


  return (
    <div style={container}>
      <div style={pieChart} />
      <div style={daysContainer}>
      {[...Array(5)].map( (x, i) =>
        <DayCard key={i} dayN={i} />
      )}
      </div>
    </div>
  )
}

export default AllDays

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '3em'
  },
  pieChart: {
    width: '150px',
    border: '1px solid black',
    borderRadisu: '50%',
    background: 'lightgreen'
  },
  daysContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '3em'
  }
}

const { container, pieChart, daysContainer } = styles

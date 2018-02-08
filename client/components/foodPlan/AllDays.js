import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { DayCard, GroceryList } from './index'
import MacroPieChartContainer from './MacroPieChartContainer';

const AllDays = (props) => {

  return (
    <div style={container}>
      <div style={daysContainer}>
      {[...Array(5)].map( (x, i) =>
        <DayCard className="day-card" key={i} dayN={i} />
      )}
      </div>
      <div style={pieChartContainer}>
        <MacroPieChartContainer />
      </div>
    </div>
  )
}

export default AllDays

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  pieChartContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  daysContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    left: '23vw',
    top: '10vh'
  }
}

const { container, pieChartContainer, daysContainer } = styles

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import DayCard from './DayCard'

const AllDays = (props) => {


  return (
    <div style={container}>
      {[...Array(7)].map( (x, i) =>
        <DayCard key={i} dayN={i} />
      )}
    </div>
  )
}

export default AllDays

const styles = {
  container: {
    display: 'flex'
  }
}

const { container } = styles

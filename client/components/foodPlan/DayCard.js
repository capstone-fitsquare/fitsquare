import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import SearchButton from './SearchButton'
import MacroGoalCountdown from './MacroGoalCountdown';
import MicroGoalCountdown from './MicroGoalCountdown';
import Piechart from '../visualizations/PieChart'
import { addFoodDayN, removeFoodDayN } from '../../store'
import { Button, Icon } from 'semantic-ui-react'
import { DropTarget } from 'react-dnd'


const Types = {
  ITEM: 'recipe_img'
}

const dayCardTarget = {
	drop() {
		return { name: 'Day Card' }
	},
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class DayCard extends Component {

  constructor() {
    super()
    this.state = {
      showDetails: false
    }
    this.toggleDetails = this.toggleDetails.bind(this)
  }

  componentWillMount() {
    if (this.props.dayN === 0) this.setState({ showDetails: true })
  }

  toggleDetails() {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {

    const { breakfast, lunch, dinner, snack, dayN } = this.props

    const { canDrop, isOver, connectDropTarget } = this.props
		const isActive = canDrop && isOver

    let backgroundColor = 'lightgreen'
		if (isActive) {
			backgroundColor = 'darkgreen'
		} else if (canDrop) {
			backgroundColor = 'darkkhaki'
		}

    // return this.state.showDetails ?
    // connectDropTarget(
    //   <div style={container}>

    //     <div style={width}>
    //       <div style={meal}>
    //         <div style={breakfast}>
    //           <p>Breakfast</p>
    //           <Button icon size='mini' onClick={this.toggleDetails} circular={true} style={minus}>
    //             <Icon name='window minimize' />
    //           </Button>
    //         </div>
    //         <div>
    //             {breakfast &&
    //               <div>
    //                 <div>{breakfast.name}</div>
    //                 <img src={breakfast.imgUrl} />
    //               </div>
    //             }
    //         </div>
    //         <SearchButton meal="breakfast" dayN={dayN} />
    //       </div>

    //       <div style={meal}>
    //         <div>
    //           <p>Lunch</p>
    //         </div>
    //         <div>
    //             {lunch &&
    //               <div>
    //                 <div>{lunch.name}</div>
    //                 <img src={lunch.imgUrl} />
    //               </div>
    //             }
    //         </div>
    //         <SearchButton meal="lunch" dayN={dayN} />
    //       </div>

    //       <div style={meal}>
    //         <div>
    //           <p>Dinner</p>
    //         </div>
    //         <div>
    //             {dinner &&
    //               <div>
    //                 <div>{dinner.name}</div>
    //                 <img src={dinner.imgUrl} />
    //               </div>
    //             }
    //         </div>
    //         <SearchButton meal="dinner" dayN={dayN} />
    //       </div>

    //       <div style={meal}>
    //         <div>
    //           <p>Snacks</p>
    //         </div>
    //         <div>
    //             {snack &&
    //               <div>
    //                 <div>{snack.name}</div>
    //                 <img src={snack.imgUrl} />
    //               </div>
    //             }
    //         </div>
    //         <SearchButton meal="snacks" dayN={dayN} />
    //       </div>
    //     </div>

    //   </div>
    // ) : connectDropTarget(
    //   <div id={`dayN-${dayN}`} style={square} onClick={this.toggleDetails}>
    //   {
    //     isDragging ?
    //     <div>'Release to drop'</div>
    //     : <div>'Drag an img here'</div>
    //   }
    //   </div>

      return connectDropTarget(
        <div id={`dayN-${dayN}`} style={{...square, background: backgroundColor}} onClick={this.toggleDetails}>
        {
          isActive ?
          <div>'Release to drop'</div>
          : <div>'Drag an img here'</div>
        }
        </div>
      )
  }

}

// const mapState = (state, ownProps) => {
//   // return {
//   //   foodsDayN: state.foodsDayN
//   // }
//   const { dayN } = ownProps
//   return {
//     breakfast: state.recipes.filter(recipe => recipe.meal === 'breakfast')[dayN],
//     lunch: state.recipes.filter(recipe => recipe.meal === 'lunch')[dayN],
//     dinner: state.recipes.filter(recipe => recipe.meal === 'dinner')[dayN],
//     snack: state.recipes.filter(recipe => recipe.meal === 'snack')[dayN]
//   }
// }

// const mapDispatch = null

export default DropTarget(Types.ITEM, dayCardTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop(),
}))(DayCard)

const styles = {
  container: {
    display: 'flex',
    margin: '1em',
    padding: '1em'
  },
  meal: {
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '3px',
    background: 'lightyellow'
  },
  square: {
    background: 'lightgreen',
    height: '100px',
    width: '100px',
    borderRadius: '3px',
    margin: '1em',
    padding: '1em'
  },
  minus: {
    marginLeft: '3em',
  },
  breakfast: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  width: {
    width: '400px'
  }
}

const { container, meal, square, minus, breakfast, width } = styles


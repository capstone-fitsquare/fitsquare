import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';

import {
  Main,
  Login,
  Signup,
  UserHome,
  NewGoals,
  IntroSequence,
  AllDays,
  Animations,
  Checkbox,
  FoodPlanWrapper,
  GroceryList,
  Container,
  UserAccountProfilePage,
  Test,
} from './components';

import {
  me,
  fetchExercises,
  fetchGroceryLists,
  fetchListItems,
  fetchMacroGoals,
  fetchMicroGoals,
  fetchRecipes,
} from './store';
import RecipesContainer from './components/foodPlan/recipes/RecipesContainer';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Router history={history}>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/new-goal" component={NewGoals} />
            <Route exact path="/all-days" component={AllDays} />
            <Route exact path="/animations" component={Animations} />
            <Route exact path="/checkbox" component={Checkbox} />
            <Route exact path="/recipes-box" component={RecipesContainer} />
            <Route exact path="/food-plan" component={FoodPlanWrapper} />
            <Route exact path="/dnd-test" component={Container} />
            <Route exact path="/" component={IntroSequence} />
            <Route exact path="/test" component={Test} />

            {isLoggedIn && (
              <Switch>
                {/* Routes placed here are only available after logging in */}
                <Route path="/home" component={UserHome} />
                <Route path="/profile-page" component={UserAccountProfilePage} />
              </Switch>
            )}
            {/* Displays our Login component as a fallback */}
            <Route component={Login} />
          </Switch>
        </Main>
      </Router>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
      dispatch(fetchExercises());
      dispatch(fetchGroceryLists());
      dispatch(fetchListItems());
      dispatch(fetchMacroGoals());
      dispatch(fetchMicroGoals());
      dispatch(fetchRecipes());
    },
  };
};

export default connect(mapState, mapDispatch)(Routes);

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

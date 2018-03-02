import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGoals } from './actions';

class Protected extends Component {

  componentDidMount(){
    this.props.fetchGoals();
  }

  renderGoals() {
    return _.map(this.props.goals, goal => {
      return <li key={goal.id}>{goal.description}</li>
    })
  }

  render() {
    return(
      <div>
        <h1>Protected</h1>
        {this.renderGoals()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { goals: state.goals };
}

export default connect(mapStateToProps, { fetchGoals })(Protected);

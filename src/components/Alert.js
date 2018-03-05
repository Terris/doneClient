import React, { Component } from 'react';
import { alertActions } from '../actions';
import { connect } from 'react-redux';

class Alert extends Component {
  componentWillUnmount() {
    this.props.dispatch(alertActions.clear());
  }

  render() {
    const { alert } = this.props;
    if (!alert.type) { return(<div></div>)}
    return(
      <div className={alert.type}>
        <p>{alert.message}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    alert: state.alert
  }
}
export default connect(mapStateToProps)(Alert)

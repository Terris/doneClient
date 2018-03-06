import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBoards } from '../../actions'
import Alert from '../Alert';

class Boards extends Component {

  componentDidMount() {
    this.props.fetchBoards()
  }

  renderBoards() {
    if (!this.props.boards.length) {
      return(<p>Create a new Board to get started.</p>)
    }
    return _.map(this.props.boards, board => {
      return(
        <div key={board.id} className="block__card block__board three columns">
          <h2>{board.name}</h2>
        </div>
      )
    });
  }

  render() {
    if (!this.props.boards) {
      return ( <p>Loading Boards...</p>)
    }
    return(
      <div>
        <Alert />
        <button>New Board</button>
        <div className="row block__mod">
          {this.renderBoards()}
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return { boards: state.boards.boards }
}
export default connect(mapStateToProps, { fetchBoards })(Boards)

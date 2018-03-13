import _ from 'lodash';
import React, { Component } from 'react';
import { fetchBoards } from '../../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class BoardNav extends Component {

  componentDidMount() {
    this.props.fetchBoards();
  }

  addNewBoard() {
    this.props.addNewBoard()
  }

  renderBoards() {
    return _.map(this.props.boards, board => {
      return(
        <li key={board.id}><Link to={`/user/boards/${board.id}`}>{board.name}</Link></li>
      )
    });
  }

  render() {
    return (
      <nav className="layout_boards_nav">
        <hr />
        <ul>
          {this.renderBoards()}
          <li><Link to="/user/boards/new">+ New Board</Link></li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return { boards: state.boards }
}
export default connect(mapStateToProps, { fetchBoards })(BoardNav);

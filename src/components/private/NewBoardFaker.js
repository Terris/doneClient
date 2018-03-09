import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewBoardFaker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div className="block__mod block__card block__board" style={{maxWidth: 550+"px", }}>
        <form onSubmit={this.handleSubmit} onBlur={this.handleSubmit}>
          <fieldset className="board-header">
            <input type="text" name="name" placeholder="Board name" className="input-h2" autoComplete="off"
              ref={this.props.nameRef}
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </fieldset>
        </form>
      </div>
    )
  }
}

export default connect()(NewBoardFaker)

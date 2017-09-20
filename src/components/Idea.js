import React, { Component } from 'react'

class Idea extends Component {

  handleClick = () => { this.props.onClick(this.props.idea.id)  }
  handleDelete = () => { this.props.onDelete(this.props.idea.id) }

  render() {
    return (
      <div className="three columns">
        <div className="tile">
          <span className="deleteIdea" onClick={this.handleDelete}>X</span>
          <h2 onClick={this.handleClick}>{this.props.idea.title}</h2>
          <p onClick={this.handleClick}>{this.props.idea.body}</p>
        </div>
      </div>
    )
  }
}

export default Idea

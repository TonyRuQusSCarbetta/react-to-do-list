import React, { Component } from "react";

// extends component means we are copying what react built in as component default method
class List extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.children}</h2>

        <div>
          <input placeholder={this.props.placeholder} />
          <button>New Task</button>
        </div>

        <div>
          <ul>
            <li>Get this task done!</li>
            <li>Get this task done!</li>
            <li>Get this task done!</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default List;

//every class component needs a method called render.
// render means it must be check by the 'react bot' for changes
// the render NEEDS a RETURN

// {this} is called instance .  instance prop

//function components are plain the user will not change anything, they will be the same/ constant!
//Class components are when users are changing things, class components have a method called render() , class components can change!

//the next method instead of render() is initial state ().

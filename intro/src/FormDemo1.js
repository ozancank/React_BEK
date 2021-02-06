import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = { userName: "" };

  onChangeHandler = (event) => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>User Name</h3>
          <input onChange={this.onChangeHandler} type="text"></input>
          <h3>User Name is {this.state.userName}</h3>
          <input type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}

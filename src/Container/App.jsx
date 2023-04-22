import React, { Component } from "react";
import InputBox from "../Component/InputBox";
import InputList from "../Component/InputList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      item: [],
    };
  }
  onHandleChange = (event) => {
    this.setState({ message: event.target.value });
  };

  onHandleClick = () => {
    const { message, item } = this.state;
    const newItem = { message };
    this.setState({ item: [...item, newItem], message: "" });
  };

  onHandleDelete = (index) => {
    const { item } = this.state;
    const newItemList = item.filter((item, i) => i !== index);
    this.setState({ item: newItemList });
  };

  render() {
    return (
      <div>
        <InputBox
          onHandleChange={this.onHandleChange}
          onHandleClick={this.onHandleClick}
        />
        <InputList
          toDoItem={this.state.item}
          onHandleDelete={this.onHandleDelete}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Hello from "./components/Hello";
import './components/HelloCss.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      className : 'helloItem',
      todoItems : [
        { title: "Mua bim bim", isChecked: false },
        { title: "Mua keo keo", isChecked: true },
        { title: "Di da bong"}
      ]
    }
  }

  onClickItem(item){
  }

  render() {
    return (
      <div className="App">
        {this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => (
          <Hello key={index} item={item} className={this.state.className} onClick={() => this.onClickItem(item)}/>
        ))}
        {this.state.todoItems.length === 0 && 'Nothing here'}
      </div>
    );
  }
}

export default App;

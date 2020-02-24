import React, { Component } from "react";
import './HelloCss.css'
class Hello extends Component {
  render() {
    const {onClick,className} = this.props;
    return (
      <div onClick={onClick} className={className}>
        <h1>{this.props.item.title}</h1>
      </div>
    );
  }
}

export default Hello;

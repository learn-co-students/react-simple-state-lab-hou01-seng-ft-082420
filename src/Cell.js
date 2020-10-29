
import React, {Component} from "react";
import Matric from "./Matrix.js";


export default class Cell extends Component {
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }

  changeC = () => {
    this.setState({
      color: this.state.color = "#333"
    })
  }

  render() {
    return (
      <div className = "cell" onClick = {this.changeC} style={{backgroundColor: this.state.color }}>
      {this.state.color}
      </div>
    )
  }


}

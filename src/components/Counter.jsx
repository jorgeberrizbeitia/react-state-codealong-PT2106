// LESSON 1. BASIC REACT STATE CODEALONG.

import React, {Component} from "react"

const btnStyles = {
  margin: "10px",
  border: "none",
  color: "white",
}

class Counter extends Component {

  // Old way to create a state
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     number: 0
  //   }
  // }

  // better syntax for creating a state
  state = {
    number: 0,
    text: ["Hello", "Bye"] // example as other states
  }

  changeNumber = (btn) => {
    console.log("Clicking!")

    // btn = "decrease"
    // btn = "increase"

    // DOM manipulation doesn't modify the virtual DOM. Doesn't use the full power of React.
    // const btnElem = document.querySelector("h1")
    // btnElem.innerHTML = Number(btnElem.innerHTML) + 1

    // makes sense logically. But this doesn't cause a re-render
    // this.state.number = this.state.number + 1

    // GOOD but we can do BETTER! 
    // if (btn === "increase") {
    //   this.setState( { number: this.state.number + 1 } )
    // } else {
    //   this.setState( { number: this.state.number - 1 } )
    // }

    // using ternary operators
    this.setState( { number: btn === "increase" ? this.state.number + 1 : this.state.number - 1  } )
    
    
  }

  // having another method for decrease is FINE but we can do better by reusing the above function
  // decreaseNumber = () => {
  //   this.setState( { number: this.state.number - 1 } )
  // }

  render() {

    const { number } = this.state

    return (
      <div>
        <h1>{number}</h1>
        {/* To pass arguments to the callback function we create an anonymous one that will invoke it on trigger */}
        <button style={{ ...btnStyles, backgroundColor: number < -5 ? "red" : "black" }} disabled={ number < -9 && "true" } onClick={ () => this.changeNumber("decrease") }>Decrease</button>
        <button style={{ ...btnStyles, backgroundColor: number > 5 ? "red" : "black" }} disabled={ number > 9 && "true" } onClick={ () => this.changeNumber("increase") }>Increase</button>
      </div>
    )
  }
}

export default Counter
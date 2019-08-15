import React, { Component } from "react";
import CaretPositioning from '../components/EditCaretPositioning'

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //newValue input by user
      newValue : undefined,
      //stores positions(s) of caret to handle reload after onChange end
      caretPosition : {
        start : 0,
        end : 0
      }
    }
  }

  //handler during key press / input
  onChangeHandler = event => {
    let targetValue =  event.currentTarget.textContent;
    //save caret position(s), so can restore when component reloads
    let savedCaretPosition = CaretPositioning.saveSelection(event.currentTarget);
    this.setState({
      "newValue": targetValue,
      "caretPosition" : savedCaretPosition
    }, () => {
      //restore caret position(s)
      CaretPositioning.restoreSelection(document.getElementById("editable"), this.state.caretPosition);
    })
  }

  //handler when user opens input form
  onBlurHandler = event => {
    //some code that sends the "newValue" to be saved, and resets state
  }

  render() {
    console.log(this.state.caretPosition,this.state.newValue)
    //determine which value to show in the div
    let showValue;
    //if there is a new value being input by user, show this value
    if (this.state.newValue !== undefined) {
      showValue = this.state.newValue;
    } else {
      //if prop has no value e.g. null or undefined, use "" placeholder
      if (this.props.value) {
        showValue = this.props.value;
      } else {
        showValue = "";
      }
    }
    return (
        <div
        id="editable"
        contentEditable="true"
        suppressContentEditableWarning="true"
        onInput={this.onChangeHandler.bind(this)}
        onBlur={this.onBlurHandler}
      >{showValue}
      </div>
    )
  }
}

export default Input;

// const InputDiv = () => {
//     return (
//       <div>
//         <h1>this is input component</h1>
//       </div>
//     );
//   };
//   export default InputDiv;
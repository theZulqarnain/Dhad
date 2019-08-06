import React, { Component } from 'react'
import { connect } from 'react-redux';
import { dataListHandler } from '../action';
import ContentEditable from 'react-contenteditable';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      html: "<div>Enter something here!</div>"
    };
    this.callAPI = this.callAPI.bind(this);
   
  }

  handleChange = evt => {
   
    this.setState({ html: evt.target.value });
    this.callAPI(evt.target.value);
  };

  


  HighlighterHandler =  (text ,  wrongWord ) => {

    let  diacritics = "[\u064E\u064B\u064F\u064C\u0650\u064D\u0651\u0652ـ]*";
    let  splitedCharacter = "";
    for (var i = 0; i < wrongWord.length; i++) {
      let  character      = wrongWord.charAt(i);
      splitedCharacter += character + diacritics ;
    
    }
    
    let words = [splitedCharacter];
    let pattern = "(" + words.join("|") + ")"; 
        pattern = "(^|\\s)" + pattern + "($|[/_{}:,\\s\\-\\[\\]]+)";
    let regex = new RegExp(pattern, "m");
    let match = text.match(regex);
    let matchedWord = "";
    if (match) {
      matchedWord = match[0];
      let startPostion = match.index + match[1].length;
      let endPostion = match[2].length ; 

      
     
    }


     return matchedWord 
  } 
  
  callAPI = (text) => {
    console.log("API get called!", text);
    // هَذَا كِتَابِ مُفِيدِ.
    // after api calls
    let wrongWords = ['هذا'];
    let suggestedList = {
      'wrong1': ['wrong'] , 
      'wrong2': ['wrong']  ,
      'wrong3': ['wrong'] 
    };

    for( let i = 0; i < wrongWords.length; i++) {
      let wrongWord = wrongWords[i];
      /* for now I did not use wrongWrod_id and wrongWord_suggestedList but we might need them */
      let wrongWord_id = "error-" + i ;
      let wrongWord_suggestedList = suggestedList[wrongWord];
      this.HighlighterHandler( text  , wrongWord );
    };

          
  }

  render = () => {
    
    return (
      <div className="Editor">
        <h2>Dhad Editor</h2>
        <ContentEditable
          html={this.state.html} // innerHTML of the editable div
          disabled={false} // use true to disable edition
          onChange={this.handleChange} // handle innerHTML change
          className="dhad_editor"
        />
        <button onClick={() => dataListPass()}>submit</button>
      </div>

    );
  };
}



const mapStateToProps = (state) => {
  return {
    DataList: state.MainReducer.data_list
  }
}
export default connect(mapStateToProps, { dataListHandler })(Main);

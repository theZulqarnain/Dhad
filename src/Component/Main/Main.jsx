import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Footer from "../Footer/Footer";
import {
  Editor,
  CompositeDecorator,
  EditorState  , 
  ContentState
} from "draft-js";

import HighlightedWrongWords from "./HighlightedWrongWords";

import * as actionCreators from "../../store/actions/index";
import * as actionTypes from '../../store/actions/actionTypes';
var h2p = require("html2plaintext");

const Context = React.createContext();

class Main extends Component {
  constructor(props) {
    super(props);
    const compositeDecorator = new CompositeDecorator([
      {
        strategy: this.highlightWorngWords,
        component: HighlightedWrongWords
      }
    ]);  
    this.state = {
      //editorState: EditorState.createEmpty(compositeDecorator),
      editorState: EditorState.createWithContent( ContentState.createFromText('اكتي موضوع عن ضاد النهووض باللغة العربية وإثراء المحتوى العربي') , compositeDecorator) ,
      subjectTitle: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.animEditor = this.animEditor.bind(this);
    this.highlightWorngWords = this.highlightWorngWords.bind(this);
  }

  handleChange = (editorState) => {  
    this.setState({
      editorState
    });
      
    var text = h2p(this.state.editorState.getCurrentContent().getPlainText());
    console.log("", text);

    this.props.onChangeText(text);
    this.props.onSpellCheck(text);
  };

  // Animation when writting in subject input
  animEditor = () => {
    var input = this.refs.dhadSubject;
    var wrap = this.refs.editorWrap;
    if (input.value === "") {
      wrap.style.marginTop = "15%";
      wrap.style.marginRight = "20%";
    } else {
      wrap.style.marginRight = "0";
      setTimeout(function() {
        wrap.style.marginTop = "0";
      }, 500);
    }
  };
  //Snakbar not wotking now we will make it after replacing texts 
  snackBar = sWord => {
    var cWord = sWord.parentNode.parentNode.parentNode;
    cWord.classList.remove("dh_sp_error");
    setTimeout(function() {
      cWord.replaceWith(cWord.textContent);
    }, 4000);
    var x = document.getElementById("snackbar-wrap");
    x.className = "show";
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 3000);
  };

  highlightWorngWords = (contentBlock, callback ) => {
    var text = contentBlock.getText();
    let worngWords =   this.props.errorWordslist ? this.props.errorWordslist  : [];
    worngWords.forEach(word => {
      let indexes = this.getIndicesOf(word, text);
      indexes.forEach(wordIndex => {
        callback(wordIndex, wordIndex + word.length);
      });
    });
  };  
  // function to get the index of each element in given array
 getIndicesOf = (searchStr, str) => {
  var searchStrLen = searchStr.length;
  if (searchStrLen === 0) {
    return [];
  }
  var startIndex = 0,
    index,
    indices = [];

  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
};

  render() {
   
    return (
       //<Context.Provider value={this.state.editorState}>
       <Fragment>
        <main id="main-container" className="main_container">
          <section
            data-simplebar="init"
            id="editor-wrap"
            className="editor_wrap"
            ref="editorWrap"
            ss-container="true"
          >
            <input
              type="text"
              id="dhad-subject"
              className="dhad_subject"
              ref="dhadSubject"
              tabIndex={-1}
              placeholder="عنوان الموضوع يكتب هنا"
              onKeyPress={this.animEditor}
            />
            <div id="dhad-editor" className="dhad_editor">
              <Editor
                editorState={this.state.editorState}
                onChange={this.handleChange}
                textDirectionality="RTL"
              />
            </div>
          </section>
        </main>
        <Footer>
          <span> 0 حرف</span>
          <span> 0 كلمة </span>
          <span> 1 جملة </span>
          <span> 4 ثانية وقت التدقيق </span>
          <span> 8 ثانية وقت التحدث </span>
        </Footer>
   </Fragment>  // </Context.Provider>
    );
  }
}


const mapStateToProps = state => {
  return {
    editorState: state.draftReducer.editorState ,
    errorWordslist: state.checkReducer.errorWordslist,
    correctionsList: state.checkReducer.correctionsList
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  onSaveEditorState: (editorState) => {
    dispatch({
      type: actionTypes.UPDATE_EDITOR_STATE ,
      payload: editorState,
    })
  } ,
  onChangeText: value => dispatch(actionCreators.TextChange(value)),
  onSpellCheck: word => dispatch(actionCreators.ErorrWordsList(word))

 }
} 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

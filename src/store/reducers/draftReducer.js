import { EditorState  , CompositeDecorator  } from 'draft-js';
import * as actionTypes from '../actions/actionTypes';
import HighlightedWrongWords from '../../Component/Main/HighlightedWrongWords';
import highlightWorngWords from '../../Component/Main/Main';


const  compositeDecorator = new CompositeDecorator([
  {
    strategy: highlightWorngWords,
    component: HighlightedWrongWords
  }
]);

const defaultState = {
    
    editorState: EditorState.createEmpty(compositeDecorator),
};
  
  const reducer = (state = defaultState, { payload, type }) => {
    if (type === actionTypes.UPDATE_EDITOR_STATE ) {
      console.log('redux rami action: ', type, payload.getCurrentContent().getPlainText());
      return {
        ...state,
        editorState: payload,
      };
    }
    return state;
  };

export default reducer ;
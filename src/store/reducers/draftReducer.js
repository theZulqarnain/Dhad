import { EditorState, Editor } from 'draft-js';
import * as actionTypes from '../actions/actionTypes';

const defaultState = {
    editorState: EditorState.createEmpty(),
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
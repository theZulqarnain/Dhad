import React, { useState  , Fragment } from 'react';
import SpellWrapTab from './spellWrap';
import IgnoreListWrap from './IgnoreListWrap';
import DictionaryWrap from './DictionaryWrap';
import '../../../index.css';

const Tabs  = (props) =>{
    
      let tab ; 
      if(props.tabName){
          if(props.tabName == "spell-wrap") {
            tab = <SpellWrapTab /> ;
          }
          if(props.tabName == "ignore-list-wrap") {

            tab = <IgnoreListWrap /> ;
          }
          if(props.tabName == "dictionary-wrap") {

            tab = <DictionaryWrap /> ;
          }
          
      }
        return(
            <Fragment>
                 {tab}
            </Fragment>
        );
}

export default Tabs ; 
import React, { Component } from 'react';
import {openTab} from '../../../../shared/customFuntions';
class SpellCheck extends Component {
render(){
    return(
      <li>
      <a href="#"  className="tablinks" onClick={ (event) => openTab(event, 'punctuation-wrap')} >
        <span className="f_l pun_error_count">7</span>
        علامات الترقيم
      </a>
    </li>
    );
 }
}  

export default SpellCheck  ; 





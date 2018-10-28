import React, { Component } from 'react';
import {openTab} from '../../../../shared/customFuntions';
class SpellCheck extends Component {
render(){
    return(
        <li>
        <a href="#" className="tablinks" onClick={ (event) => openTab(event, 'spell-wrap')}>
            <span className="f_l word_error_count">55</span>
            تدقيق إملائي
        </a>
      </li>
      
    );
 }
}   

export default SpellCheck  ; 





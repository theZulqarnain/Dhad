import React, { Component } from 'react';
import HighlightedWrongWords, {stopDropDownList} from '../../../Main/HighlightedWrongWords';
import SimpleScrollbar from "simple-scrollbar";



/* 
What I need in this component 
1) set a conditalnal style for open and close tabs conatanier 
2) list suggetsion list dynnamically 
3) for a closed contnet we should map through them as  well 

*/

class SpellCheckTap extends Component {

  
render(){
   
    return(
       <HighlightedWrongWords />

    );
 }
}   

export default SpellCheckTap  ; 





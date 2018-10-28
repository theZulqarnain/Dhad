import React, { Component } from 'react';
import {openTab} from '../../../../shared/customFuntions';
class Plagirsm extends Component {
render(){
    return(
        <li className="nav_sugg_bottom nav_sugg_bottom_plag">
					<a href="#"  className="tablinks lnk_quote" onClick={ (event) => openTab(event, 'plagiarism-wrap')}>
						الانتحال الأدبي
					</a>
		</li>
    );
 }
}   

export default Plagirsm  ; 





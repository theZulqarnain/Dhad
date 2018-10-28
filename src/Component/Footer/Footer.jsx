import React, { Component , Fragment  } from 'react';

class Footer extends Component {
    /* Undo */
	 undo = ()  => {
		// cWord.classList.add('dh_sp_error');
		// clearTimeout(clearStyle);
		// clearTimeout(removeSugg);
		// errorLabel.textContent = errorWord;
	}
render(){
    return(
<Fragment>
    <footer id="editor-footer" className="editor_footer">
        <p id="textStatics">
         {this.props.children}
        </p>
        <span id="demo" />
    </footer>
    <div id="snackbar-wrap">
	<p className="f_r">
		<span className="icon_correct f_r"></span>
		تصحيح
	</p>
	<p className="f_l">
		<a  href="#" className="btn_undo" onClick={this.undo}>تراجع</a>
	</p>
    </div>
    </Fragment>
    );
 }
 
}   

export default Footer ; 





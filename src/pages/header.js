import React, { Component } from 'react';
import '../index.css';
import '../../node_modules/line-awesome/css/line-awesome.min.css'; 

class Header extends Component {
  

   showAssistant = () =>  {
		// var assi_btn = document.getElementById("assistant-btn");
		// var editor_wrap = document.getElementById("editor-wrap");
		// var close_assi = document.getElementById("close-assistant-btn");
		// var mis_count = document.getElementById("misspelled-count-wrap");
		// //var rank = document.getElementById("rank-wrap");
		// var sidebar_left_bottom = document.getElementById("sidebar-left-bottom");
		// var sugg_wrap = document.getElementById("sugg-wrap");
		// var footer_wrap = document.getElementById("editor-footer");

		// //assi_btn.style.width = "40px";
		// assi_btn.style.backgroundPosition = "center center";
		// editor_wrap.style.width = "40%";
		// editor_wrap.style.marginRight = "0";
		// setTimeout(function(){ close_assi.style.display = "block"; }, 700);
		// mis_count.style.visibility = "hidden";
		//setTimeout(function(){ rank.style.display = "block"; }, 500);
		// //sidebar_left_bottom.style.display = "none";
		// sugg_wrap.style.width = "50%";
		// sugg_wrap.style.overflow = "visible";
		// footer_wrap.style.paddingRight = "8%";
		
		//Add Class
		// editor_wrap.classList.add('open_assis');
		
   }

render(){
    return(
	    <header id="editor-header" className="editor_header">
        
            <div className="assistan_btn_wrap">
              <a href="javascript:void(0);" id="assistant-btn" onClick={this.showAssistant} className="assistant_btn destroy" data-tooltip="أبدا التدقيق مع ضاد" data-tooltip-right>
                <span id="assi-condition">
                  <label className="assi_logo" />
                </span>
                <span id="error-count-condition">
                  <label className="con_error_count">3</label>
                </span>
                <span id="che-condition">
                  <label className="checking" />
                </span>
              </a>
            </div>
            <div id="misspelled-count-wrap" className="misspelled_count_wrap">
            </div>
            <div className="close_assistant_wrap">
              <span id="close-assistant-btn" className="close_assistant_btn">
                <i className="la la-chevron-left" />
               
              </span>
            </div>
            <span className="menu_show" />
            <span className="menu_hide" />
            <span className="dhad_dark_theme" data-tooltip="الكتابة في الليل" data-tooltip-left />
            <span className="dhad_light_theme" data-tooltip="الكتابة في النهار" data-tooltip-left />
          </header>
		
    );
 }
}   

export default Header ; 





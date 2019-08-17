import React, { useState } from 'react';
import '../../index.css';
import { FaArrowLeft } from "react-icons/fa";
const Header = (props) => {

  const opendAssi_btnStyle = {
    width: `100%`,
    backgroundPosition: "center center"
  }
  const closedAssi_btnStyle = {
    width: `100%`,
    backgroundPosition: "center right"
  }


  const [closedAssistant, setAssistant]   = useState(true);
  const [assistantBtn, setAssistantBtn]   = useState(closedAssi_btnStyle);
  const [dhadDarkTheme, setdhadDarkTheme] = useState(false);


  const showAssistanthandler = () => {

    setAssistant(false);
    setAssistantBtn(opendAssi_btnStyle);
    //var assi_btn = document.getElementById("assistant-btn");
    var close_assi = document.getElementById("close-assistant-btn");
    var mis_count = document.getElementById("misspelled-count-wrap");
    var sidebar_left_bottom = document.getElementById("sidebar-left-bottom");
    var sugg_wrap = document.getElementById("sugg-wrap");
    var footer_wrap = document.getElementById("editor-footer");
    var assi_text = document.getElementById("assi-text");
    var assi_btn_wrap = document.getElementById("assistan-btn-wrap");

    setTimeout(function () { close_assi.style.display = "block"; }, 700);
    mis_count.style.visibility = "hidden";
    
    sidebar_left_bottom.style.display = "none";
    sugg_wrap.style.width = "50%";
    sugg_wrap.style.overflow = "visible";
    footer_wrap.style.paddingRight = "7%";

    setTimeout(function () { assi_text.style.marginRight = "5px"; }, 700);
    setTimeout(function () { assi_text.innerHTML = "أخفاء المُساعد"; }, 700);
    assi_btn_wrap.style.width = "160px";
    //Add Class
    editor_wrap.classList.add('open_assis');
  };

  
  

  const closeAssistantHandler = () => {
    setAssistantBtn(closedAssi_btnStyle);
  
    var editor_wrap = document.getElementById("editor-wrap");
    var close_assi = document.getElementById("close-assistant-btn");
    var mis_count = document.getElementById("misspelled-count-wrap");
    //var rank = document.getElementById("rank-wrap");
    var sidebar_left_bottom = document.getElementById("sidebar-left-bottom");
    var sugg_wrap = document.getElementById("sugg-wrap");
    var footer_wrap = document.getElementById("editor-footer");

    var assi_text = document.getElementById("assi-text");
    var assi_btn_wrap = document.getElementById("assistan-btn-wrap");

  
    editor_wrap.style.width = "80%";
    editor_wrap.style.marginRight = "5%";
    close_assi.style.display = "none";
    setTimeout(function () { mis_count.style.visibility = "visible"; }, 500);
    //rank.style.display = "none";
    sidebar_left_bottom.style.display = "block";
    sugg_wrap.style.width = "0px";
    sugg_wrap.style.overflow = "hidden";
    footer_wrap.style.paddingRight = "12%";

    assi_text.style.marginRight = "15px";
    assi_text.innerHTML = "دقِّق الآن";
    assi_btn_wrap.style.width = "40px";

    //Remove Class
    editor_wrap.classList.remove('open_assis');
    startDropDownList();
    pu_unstyle();

  }

  const dhadDarkThemeHandler = () => {
    setdhadDarkTheme(!dhadDarkTheme);
  }

  
  return (
    <header id="editor-header" className="editor_header">
      <div className="assistan_btn_wrap">
        <a href="javascript:void(0);" 
           id="assistant-btn"
           onClick={showAssistanthandler} 
           className="assistant_btn destroy" 
           data-tooltip="أبدا التدقيق مع ضاد"
          data-tooltip-right
          style={assistantBtn}
         >
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
        <span onClick={closeAssistantHandler} id="close-assistant-btn" className="close_assistant_btn">
          <FaArrowLeft />
        </span>
      </div>
      <span className="menu_show" />
      <span className="menu_hide" />
      <span onClick={dhadDarkThemeHandler} className="dhad_dark_theme" data-tooltip="الكتابة في الليل" data-tooltip-left />
      <span className="dhad_light_theme" data-tooltip="الكتابة في النهار" data-tooltip-left />
    </header>

  );
}


export default Header;





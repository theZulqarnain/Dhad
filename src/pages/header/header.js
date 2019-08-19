import React, { useState } from 'react';
import { openSidebarHandler  , darkThemeHandler  }  from '../../action';
import { connect } from 'react-redux';
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
    props.onOpenSideBar(true) ;
   
    //var footer_wrap = document.getElementById("editor-footer");
    //footer_wrap.style.paddingRight = "7%";
    

  };

  
  

  const closeAssistantHandler = () => {
    setAssistantBtn(closedAssi_btnStyle);
    props.onOpenSideBar(false);
  
   
  //  var footer_wrap = document.getElementById("editor-footer");
  
   
    
    //footer_wrap.style.paddingRight = "12%";
    
   
  }

  const dhadDarkThemeHandler = () => {
   
    setdhadDarkTheme(!dhadDarkTheme);
    props.onDarkTheme(!dhadDarkTheme);
    if(!dhadDarkTheme) {
      document.body.classList.add('dhad_dark_wrap');
    } else {
      document.body.classList.remove('dhad_dark_wrap');
    }
    console.log(dhadDarkTheme);
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
      <div className="close_assistant_wrap">
        <span onClick={closeAssistantHandler} 
              id="close-assistant-btn" style={props.OpenSideBar ? {display: 'block'}  : null } 
              className="close_assistant_btn">
          <FaArrowLeft />
        </span>
      </div>
      <span className="menu_show" />
      <span className="menu_hide" />
      <span onClick={dhadDarkThemeHandler} className={dhadDarkTheme ? "dhad_light_theme" : "dhad_dark_theme "}
            data-tooltip={ dhadDarkTheme ? "الكتابة في النهار" :  "الكتابة في الليل"} data-tooltip-left />
    </header>

  );
}



const mapDispatchToProps = dispatch => {
  return {
      onOpenSideBar: (val) => dispatch(openSidebarHandler(val)) , 
      onDarkTheme:   (val) => dispatch(darkThemeHandler(val))
  };
};


const mapStateToProps = (state) => {
  return {
    OpenSideBar: state.MainReducer.openSideBar ,
    onDarkTheme: state.MainReducer.darkTheme
  }
}
export default connect( mapStateToProps ,  mapDispatchToProps )(Header);






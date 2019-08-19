import React, { useState  , Fragment } from 'react';
import '../../index.css';
import Tabs from './tabs/index.js';
import { connect } from 'react-redux';
import { FaQuoteRight } from "react-icons/fa";
import Plagiarism from './plagiarism';
import ArabicTeachers from './ArabicTeachers/ArabicTeachers';
const LeftSiderbar  = (props) =>{

  const [tab, setTab] = useState();

    	// Tabs in left aside
	const  openTab  =  (tabName)  =>  {
         setTab(tabName);
  }

  const suggWrapStyle = {
    width: `50%` ,
    overflow: 'visible' 
  }
    

    return(
        <Fragment>
        <aside id="sidebar-left-links" className="sidebar_l_links" aria-label="">
        <div id="sugg-wrap" className="sugg_wrap" style={props.OpenSideBar ? suggWrapStyle : null } >
          <nav className="sidebar_sugg">
            <ul  className="nav_sugg_top">
              <li>
                <a href="javascript:void(0);"  className="tablinks" onClick={ () =>  openTab('spell-wrap')}>
                  <span className="f_l word_error_count">55</span>
                  تدقيق إملائي
                </a>
              </li>
             
              <li>
                <a href="javascript:void(0);"  className="tablinks" onClick={() => openTab('ignore-list-wrap')}>
                  <span className="f_l ignore_word_count">5</span>
                  قائمة التجاهل
                </a>
              </li>
              <li className="hr">
                <a href="javascript:void(0);"  className="tablinks" onClick={() => openTab('dictionary-wrap')}>
                  <span className="f_l dic_word_count">3</span>
                  القاموس الشخصي
                </a>
              </li>
             
              <li>
                <label htmlFor="modal-1">
                  <span className="f_l">60</span>
                  تقييم المحتوى
                </label>
              </li>
            </ul>
          </nav>
          <div id="spell-punctuation-plagiarism-wrap" className="spl_pun_pla_wrap">
            <Tabs  tabName={tab}/>
          </div>
        </div>
        <ul id="sidebar-left-bottom" className="nav_l_bottom">
            {/* here we need to handle show a box for the btoom items */}
           <Plagiarism />
           <ArabicTeachers />
        </ul>
      </aside>
      </Fragment>

    );
 }

 const mapStateToProps = (state) => {
  return {
    OpenSideBar: state.MainReducer.openSideBar  
  }
 }

export default connect( mapStateToProps )(LeftSiderbar);



























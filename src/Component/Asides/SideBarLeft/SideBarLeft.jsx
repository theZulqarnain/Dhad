import React, { Component } from 'react';
import Statstics from './Statistics/Statistics';
import CheckSetting from './CheckStetting/CheckSetting';
import SpellCheck from './SpellCheck/SpellCheck';
import Punctuation from './Punctuation/Punctuation'
import Plagirsm from './Plagiarism/Plagiarism';
import ArabicTeachers from './ArabicTeachers/ArabicTeachers';
import SpellCheckTap from './SpellCheck/SpellCheckTap';
import PunctuationTap from './Punctuation/PunctuationTap';
import PlagirsmTap from './Plagiarism/PlagiarismTap';
class SideBarLeft extends Component {
render(){
    return(
      <aside id="sidebar-left-links" className="sidebar_l_links" aria-label="ture">
      <div id="sugg-wrap" className="sugg_wrap">
        <nav className="sidebar_sugg">
          <ul id="true" className="nav_sugg_top">
            <Statstics />
            <CheckSetting />
            <SpellCheck />
            <Punctuation />
            <Plagirsm />
            <ArabicTeachers />
          </ul>
        </nav>
        <div id="spell-punctuation-plagiarism-wrap" className="spl_pun_pla_wrap">
          <SpellCheckTap />
          <PunctuationTap />
          <PlagirsmTap />
        </div>
      </div>
      <ul id="sidebar-left-bottom" className="nav_l_bottom">
        <li>
          <a href="#"  className="lnk_quote" data-tooltip="الانتحال الأدبي" data-tooltip-right />
        </li>
        <li>
          <a href="#"  className="lnk_hired" data-tooltip="أساتذة لغة عربية" data-tooltip-right />
        </li>
      </ul>
    </aside>
    );
 }
}   

export default SideBarLeft ; 





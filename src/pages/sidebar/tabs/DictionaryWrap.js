import React, { useState  , Fragment } from 'react';
import '../../../index.css';

const DictionaryWrap  = (props) =>{ 
    return(
        <section  style={{display:'block'}}  id="dictionary-wrap" className="tabcontent">
        <span className="tab_cont_close" />
        <header className="title f_r">
          <h2 className="f_r">القاموس الشخصي</h2>
          <p className="f_l">
            <span className="txt_color_brown">3</span>
            <span className="txt_color_gray"> / 50</span>
            <a href="#" target="_blank" className="btn_dictionary" data-tooltip="القاموس الشخصي" data-tooltip-top />
          </p>
        </header>
        <article className="accordian_wrap">
          <p className="paragraph f_r rtl">
            سيتم عرض الكلمات المستخدمة في المقال والمضافة في قاموسك الشخصي.
          </p>
          <div id="dictionary-wrapper" className="content">
            <ul className="dictionary_list">
              <li>جوون</li>
              <li>Mohammed</li>
              <li>Alsobaai</li>
            </ul>
          </div>
        </article>
      </section>
    );
 }

export default DictionaryWrap ; 


























import React, { useState  , Fragment } from 'react';
import '../../../index.css';

const IgnoreListWrap  = (props) =>{
      // Tabs in left aside      
    return(
        <section  style={{display:'block'}}  id="ignore-list-wrap" className="tabcontent">
        <span className="tab_cont_close" />
        <header className="title f_r">
          <h2 className="f_r">قائمة التجاهل</h2>
          <p className="f_l">
            <span className="txt_color_gray">5</span>
          </p>
        </header>
        <article className="accordian_wrap">
          <p className="paragraph f_r">
            الكلمات الخاطئة التي تم تجاهلها في المقال.
          </p>
          <div id="ignore-wrapper" className="content">
            <ul className="ignore_list">
              <li>
                <span>جوون</span>
                <a href="javascript:void(0);" className="btn_delete f_l" data-tooltip="حذف" data-tooltip-right />
              </li>
              <li>
                <span>جوون</span>
                <a href="javascript:void(0);" className="btn_delete f_l" data-tooltip="حذف" data-tooltip-right />
              </li>
              <li>
                <span>جوون</span>
                <a href="javascript:void(0);" className="btn_delete f_l" data-tooltip="حذف" data-tooltip-right />
              </li>
              <li>
                <span>جوون</span>
                <a href="javascript:void(0);" className="btn_delete f_l" data-tooltip="حذف" data-tooltip-right />
              </li>
              <li>
                <span>جوون</span>
                <a href="javascript:void(0);" className="btn_delete f_l" data-tooltip="حذف" data-tooltip-right />
              </li>
              <li>
                <span>جوون</span>
                <a href="javascript:void(0);" className="btn_delete f_l" data-tooltip="حذف" data-tooltip-right />
              </li>
              <li>
                <span>جوون</span>
                <a href="javascript:void(0);" className="btn_delete f_l" data-tooltip="حذف" data-tooltip-right />
              </li>
              <li>
                <span>جوون</span>
                <a href="javascript:void(0);" className="btn_delete f_l" data-tooltip="حذف" data-tooltip-right />
              </li>
              <li>
                <span>جوون</span>
                <a href="javascript:void(0);" className="btn_delete f_l" data-tooltip="حذف" data-tooltip-right />
              </li>
              <li>
                <span>جوون</span>
                <a href="javascript:void(0);" className="btn_delete f_l" data-tooltip="حذف" data-tooltip-right />
              </li>
              <li>
                <span>جوون</span>
                <a href="javascript:void(0);" className="btn_delete f_l" data-tooltip="حذف" data-tooltip-right />
              </li>
              <li>
                <span>جوون</span>
                <a href="javascript:void(0);" className="btn_delete f_l" data-tooltip="حذف" data-tooltip-right />
              </li>
              <li>
                <span>جوون</span>
                <a href="javascript:void(0);" className="btn_delete f_l" data-tooltip="حذف" data-tooltip-right />
              </li>
              <li>
                <span>جوون</span>
                <a href="javascript:void(0);" className="btn_delete f_l" data-tooltip="حذف" data-tooltip-right />
              </li>
              <li>
                <span>جوون</span>
                <a href="javascript:void(0);" className="btn_delete f_l" data-tooltip="حذف" data-tooltip-right />
              </li>
            </ul>
          </div>
        </article>
      </section>
    );
 }

export default IgnoreListWrap ; 


























import React, { useState  , Fragment } from 'react';
import '../../../index.css';

const SpellWrapTab  = (props) =>{
      // Tabs in left aside
    return(
      <section  style={{display:'block'}}  id="spell-wrap" className="tabcontent">
      <span className="tab_cont_close" />
      <header className="title f_r">
        <h2 className="f_r">التدقيق الإملائي</h2>
        <p className="f_l">
          <span>55</span>
          <a href="javascript:void(0);" id="spell-ignore-all" className="btn_ignore" data-tooltip="تجاهل الكل" data-tooltip-top />
        </p>
      </header>
      <article className="accordian_wrap">
        <p className="paragraph f_r">
          تصحيح الأخطاء الإملائية والأخطاء المطبعية
        </p>
        <div id="spell-wrapper">
          <div className="accordionItem open">
            <h2 className="accordionItemHeading">
              <span className="acc_word_error">اكتي</span>
              <span className="acc_point">.</span>
              <span className="acc-ww-error">تصحيح إملائي</span>
              <span className="acc_more_v" />
            </h2>
            <div className="accordionItemContent">
              <p className="acc_con_word_error">اكتي</p>
              <nav className="acc_sugg_words">
                <dfn>الكلمات المتشابهة</dfn>
                <a href="javascript:ReplaceContentInContainer('error-01','أكتب');" data-tooltip="إقتراح كلمة مشابهة" data-tooltip-top>
                  أكتب
                </a>
                <a href="javascript:ReplaceContentInContainer('error-01','أكتتاب');" data-tooltip="إقتراح كلمة مشابهة" data-tooltip-top>
                  أكتتاب
                </a>
                <a href="javascript:ReplaceContentInContainer('error-01','يكتب');" data-tooltip="إقتراح كلمة مشابهة" data-tooltip-top>
                  يكتب
                </a>
                <a href="javascript:ReplaceContentInContainer('error-01','كتب');" data-tooltip="إقتراح كلمة مشابهة" data-tooltip-top>
                  كتب
                </a>
                <dfn className="syndrome_words">الكلمات المتلازمة</dfn>
                <a href="javascript:ReplaceContentInContainer('error-01','أكتب');" data-tooltip="إقتراح كلمة ملازمة" data-tooltip-top>
                  أكتب
                </a>
                <a href="javascript:ReplaceContentInContainer('error-01','أكتتاب');" data-tooltip="إقتراح كلمة ملازمة" data-tooltip-top>
                  أكتتاب
                </a>
                <a href="javascript:ReplaceContentInContainer('error-01','يكتب');" data-tooltip="إقتراح كلمة ملازمة" data-tooltip-top>
                  يكتب
                </a>
                <a href="javascript:ReplaceContentInContainer('error-01','كتب');" data-tooltip="إقتراح كلمة ملازمة" data-tooltip-top>
                  كتب
                </a>
              </nav>
              <div className="acc_con_text_wrap width_9">
                <p className="acc_con_text">
                  هذة الكلمة <b>اكتي</b> ليست في قاموسنا. إذا كنت متأكدا من صحة هذا الإملاء، فيمكنك إضافته إلى قاموسك الشخصي لمنع التنبيهات المستقبلية.
                </p>
              </div>  
              <nav className="acc_left_option">
                <a href="javascript:void(0);" className="btn_ignore" data-tooltip="تجاهل" data-tooltip-right />
                <a href="javascript:void(0);" className="btn_dictionary" data-tooltip="إضافة للقاموس" data-tooltip-right />
                <div className="btn_feedback_wrap">
                  <span className="btn_feedback" />
                  <div className="acc_dropdown_feedback">
                    <a href="javascript:void(0);">مقترح غير صحيح</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="accordionItem close">
            <h2 className="accordionItemHeading">
              <span className="acc_word_error">نهووض</span>
              <span className="acc_point">.</span>
              <span className="acc-ww-error">تصحيح إملائي</span>
              <span className="acc_more_v" />
            </h2>
            <div className="accordionItemContent">
              <p className="acc_con_word_error">النهووض</p>
              <nav className="acc_sugg_words">
                <a href="javascript:ReplaceContentInContainer('error-02','النهوض');" data-tooltip="أنقر لتصحيح الخطاء الإملائي" data-tooltip-top>
                  النهوض
                </a>
                <a href="javascript:ReplaceContentInContainer('error-02','ينهض');" data-tooltip="أنقر لتصحيح الخطاء الإملائي" data-tooltip-top>
                  ينهض
                </a>
                <a href="javascript:ReplaceContentInContainer('error-02','نهض');" data-tooltip="أنقر لتصحيح الخطاء الإملائي" data-tooltip-top>
                  نهض
                </a>
              </nav>
              <div className="acc_con_text_wrap width_9">
                <p className="acc_con_text">
                  هذة الكلمة <b>النهووض</b> ليست في قاموسنا. إذا كنت متأكدا من صحة هذا الإملاء، فيمكنك إضافته إلى قاموسك الشخصي لمنع التنبيهات المستقبلية.
                </p>
              </div>
              <nav className="acc_left_option">
                <a href="javascript:void(0);" className="btn_ignore" data-tooltip="تجاهل" data-tooltip-right />
                <a href="javascript:void(0);" className="btn_dictionary" data-tooltip="إضافة للقاموس" data-tooltip-right />
                <div className="btn_feedback_wrap">
                  <span className="btn_feedback" />
                  <div className="acc_dropdown_feedback">
                    <a href="javascript:void(0);">مقترح غير صحيح</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="accordionItem close">
            <h2 className="accordionItemHeading">
              <span className="acc_word_error">مبروك الزواج</span>
              <span className="acc_point">.</span>
              <span className="acc-ww-error">تصحيح خطاء إملائي شائع</span>
              <span className="acc_more_v" />
            </h2>
            <div className="accordionItemContent">
              <p className="acc_con_word_error">مبروك الزواج</p>
              <nav className="acc_sugg_words">
                <a href="javascript:ReplaceContentInContainer('error-06','مبارك الزواج');" data-tooltip="أنقر لتصحيح الخطاء الإملائي الشائع" data-tooltip-top>
                  مبارك الزواج
                </a>
                <a href="javascript:ReplaceContentInContainer('error-06','مُبارك الزواج');" data-tooltip="أنقر لتصحيح الخطاء الإملائي الشائع" data-tooltip-top>
                  مُبارك الزواج
                </a>
              </nav>
              <div className="acc_con_text_wrap width_9">
                <p className="acc_con_text">
                  تصحيح خطاء إملائي شائع.
                </p>
              </div>
            </div>
          </div>
          <div className="accordionItem close">
            <h2 className="accordionItemHeading">
              <span className="acc_word_error">الللغة</span>
              <span className="acc_point">.</span>
              <span className="acc-ww-error">تصحيح إملائي</span>
              <span className="acc_more_v" />
            </h2>
            <div className="accordionItemContent">
              <p className="acc_con_word_error">الللغة</p>
              <nav className="acc_sugg_words">
                <a href="javascript:ReplaceContentInContainer('error-03','اللغة');" data-tooltip="أنقر لتصحيح الخطاء الإملائي" data-tooltip-top>
                  اللغة
                </a>
                <a href="javascript:ReplaceContentInContainer('error-03','لغة');" data-tooltip="أنقر لتصحيح الخطاء الإملائي" data-tooltip-top>
                  لغة
                </a>
              </nav>
              <div className="acc_con_text_wrap width_9">
                <p className="acc_con_text">
                  هذة الكلمة <b>الللغة</b> ليست في قاموسنا. إذا كنت متأكدا من صحة هذا الإملاء، فيمكنك إضافته إلى قاموسك الشخصي لمنع التنبيهات المستقبلية.
                </p>
              </div>
              <nav className="acc_left_option">
                <a href="javascript:void(0);" className="btn_ignore" data-tooltip="تجاهل" data-tooltip-right />
                <a href="javascript:void(0);" className="btn_dictionary" data-tooltip="إضافة للقاموس" data-tooltip-right />
                <div className="btn_feedback_wrap">
                  <span className="btn_feedback" />
                  <div className="acc_dropdown_feedback">
                    <a href="javascript:void(0);">مقترح غير صحيح</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </article>
    </section>
    );
 }

export default SpellWrapTab ; 


























import React, { Component } from 'react';
import {stopDropDownList} from '../../../Main/HighlightedWrongWords';
class SpellCheckTap extends Component {

  
render(){
 
    return(
      <section id="spell-wrap" className="tabcontent">
  <header className="title f_r">
    <h2 className="f_r">التدقيق الإملائي</h2>
    <p className="f_l">
      <span>55</span>
      <a
        href="javascript:void(0);"
        className="btn_delete"
        data-tooltip="حذف الكل"
        data-tooltip-top
      />
    </p>
  </header>
  <article data-simplebar="init" className="accordian_wrap" ss-container>
    <p className="paragraph f_r">تصحيح الأخطاء الإملائية والأخطاء المطبعية</p>
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
            <a
              href="javascript:ReplaceContentInContainer('error-01','أكتب');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              أكتب
            </a>
            <a
              href="javascript:ReplaceContentInContainer('error-01','أكتتاب');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              أكتتاب
            </a>
            <a
              href="javascript:ReplaceContentInContainer('error-01','يكتب');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              يكتب
            </a>
            <a
              href="javascript:ReplaceContentInContainer('error-01','كتب');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              كتب
            </a>
            <a
              href="javascript:ReplaceContentInContainer('error-01','أكتب');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              أكتب
            </a>
            <a
              href="javascript:ReplaceContentInContainer('error-01','أكتتاب');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              أكتتاب
            </a>
            <a
              href="javascript:ReplaceContentInContainer('error-01','يكتب');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              يكتب
            </a>
            <a
              href="javascript:ReplaceContentInContainer('error-01','كتب');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              كتب
            </a>
          </nav>
          <div className="acc_con_text_wrap width_9">
            <p className="acc_con_text">
              هذة الكلمة <b>اكتي</b> ليست في قاموسنا. إذا كنت متأكدا من صحة هذا
              الإملاء، فيمكنك إضافته إلى قاموسك الشخصي لمنع التنبيهات
              المستقبلية.
            </p>
          </div>
          <nav className="acc_left_option">
            <a
              href="javascript:void(0);"
              className="btn_delete"
              data-tooltip="حذف"
              data-tooltip-right
            />
            <a
              href="javascript:void(0);"
              className="btn_dictionary"
              data-tooltip="إضافة للقاموس"
              data-tooltip-right
            />
            <div className="btn_feedback_wrap">
              <span className="btn_feedback" />
              <div className="acc_dropdown_feedback">
                <a href="javascript:void(0);">مقترح غير صحيح</a>
                <a href="javascript:void(0);">محتوى غير لائق</a>
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
            <a
              href="javascript:ReplaceContentInContainer('error-02','النهوض');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              النهوض
            </a>
            <a
              href="javascript:ReplaceContentInContainer('error-02','ينهض');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              ينهض
            </a>
            <a
              href="javascript:ReplaceContentInContainer('error-02','نهض');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              نهض
            </a>
          </nav>
          <div className="acc_con_text_wrap width_9">
            <p className="acc_con_text">
              هذة الكلمة <b>النهووض</b> ليست في قاموسنا. إذا كنت متأكدا من صحة
              هذا الإملاء، فيمكنك إضافته إلى قاموسك الشخصي لمنع التنبيهات
              المستقبلية.
            </p>
          </div>
          <nav className="acc_left_option">
            <a
              href="javascript:void(0);"
              className="btn_delete"
              data-tooltip="حذف"
              data-tooltip-right
            />
            <a
              href="javascript:void(0);"
              className="btn_dictionary"
              data-tooltip="إضافة للقاموس"
              data-tooltip-right
            />
            <div className="btn_feedback_wrap">
              <span className="btn_feedback" />
              <div className="acc_dropdown_feedback">
                <a href="javascript:void(0);">مقترح غير صحيح</a>
                <a href="javascript:void(0);">محتوى غير لائق</a>
              </div>
            </div>
          </nav>
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
            <a
              href="javascript:ReplaceContentInContainer('error-03','اللغة');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              اللغة
            </a>
            <a
              href="javascript:ReplaceContentInContainer('error-03','لغة');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              لغة
            </a>
          </nav>
          <div className="acc_con_text_wrap width_9">
            <p className="acc_con_text">
              هذة الكلمة <b>الللغة</b> ليست في قاموسنا. إذا كنت متأكدا من صحة
              هذا الإملاء، فيمكنك إضافته إلى قاموسك الشخصي لمنع التنبيهات
              المستقبلية.
            </p>
          </div>
          <nav className="acc_left_option">
            <a
              href="javascript:void(0);"
              className="btn_delete"
              data-tooltip="حذف"
              data-tooltip-right
            />
            <a
              href="javascript:void(0);"
              className="btn_dictionary"
              data-tooltip="إضافة للقاموس"
              data-tooltip-right
            />
            <div className="btn_feedback_wrap">
              <span className="btn_feedback" />
              <div className="acc_dropdown_feedback">
                <a href="javascript:void(0);">مقترح غير صحيح</a>
                <a href="javascript:void(0);">محتوى غير لائق</a>
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
}   

export default SpellCheckTap  ; 





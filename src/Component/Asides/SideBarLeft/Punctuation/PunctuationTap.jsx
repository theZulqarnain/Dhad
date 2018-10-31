import React, { Component } from 'react';
class PunctuationTap extends Component {

  render(){
      return(
        <section id="punctuation-wrap" className="tabcontent">
    <header className="title f_r">
      <h2 className="f_r">علامات الترقيم</h2>
      <p className="f_l">
        <span>7</span>
        <a
          href="javascript:void(0);"
          className="btn_delete"
          data-tooltip="حذف الكل"
          data-tooltip-top
        />
      </p>
    </header>
    <article className="accordian_wrap" ss-container="true">
      <p className="paragraph f_r">تصحيح وإضافة علامات الترقيم</p>
      <div className="accordionItem open">
        <h2 className="accordionItemHeading">
          <span className="acc_word_error">العربية</span>
          <span className="acc_point">.</span>
          <span className="acc-ww-error">إضافة علامة ترقيم</span>
          <span className="acc_more_v" />
        </h2>
        <div className="accordionItemContent">
          <nav className="acc_sugg_words">
            <a
              href="javascript:ReplaceContentInContainer('error-04','العربية ،');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              العربية ،
            </a>
          </nav>
          <div className="acc_con_text_wrap width_9">
            <p className="acc_con_text">
              الفاصلة، ويطلق عليها أيضا الفارزة، والشولة ( ، ) يجب اضافتها بعد
              كلمة <b>العربية</b>.
            </p>
          </div>
          <div className="acc_word_details">
            <p className="txt_color_bold">مواضع استعمال الفاصلة:</p>
            <p className="txt_color_black">
              أ- بين الجمل التي يتكون من مجموعها كلام تام الفائدة في معنى معين،
              مثل:
            </p>
            <p className="txt_color_gray">
              - إن محمداً طالب مهذب، لا يؤذي أحداً، ولا يكذب في كلامه، ولا يقصر في
              دروسه.
              <br />
              - الخطبة كلام يلقى على جمهور من الناس، بهدف الإقناع والتاثر، وحث
              الناس على الالتزام بقضية معينة.
            </p>
            <p className="txt_color_black">
              ب- بين الجمل القصيرة المعطوفة المستقلة في معانيها، مثل:
            </p>
            <p className="txt_color_gray">
              - الصدق فضيلة، والكذب رذيلة، والحسد منقصة وعجز.
              <br />
              - الدنيا خير كتاب، والزمان خير معلم، والله خير الأصدقاء.
            </p>
            <p className="txt_color_black">
              ج- بين الجمل الصغرى أو أشباه الجمل، بدلاً من حرف العطف، مثل:
            </p>
            <p className="txt_color_gray">
              - سافر أخي، ابتعدت به السفينة، حزنت كثيراً.
              <br />
              - عند النهر، فوق الرابية، تحت سماء صافية، انتشر قطيع الغنم.
            </p>
          </div>
          <nav className="acc_left_option">
            <a
              href="javascript:void(0);"
              className="btn_delete"
              data-tooltip="حذف"
              data-tooltip-right
            />
            <div className="btn_feedback_wrap">
              <span className="btn_feedback" />
              <div className="acc_dropdown_feedback">
                <a href="javascript:void(0);">مقترح غير صحيح</a>
                <a href="javascript:void(0);">محتوى غير لائق</a>
              </div>
            </div>
            <div className="acc_more_details_wrap">
              <a
                onClick={this.showWordDetails}
                className="btn_more"
                data-tooltip="تفصيل أكثر"
                data-tooltip-right
              />
              <a
                onClick={this.hideWordDetails}
                className="btn_more_up"
                data-tooltip="أغلق التفاصيل"
                data-tooltip-right
              />
            </div>
          </nav>
        </div>
      </div>
      <div className="accordionItem close">
        <h2 className="accordionItemHeading">
          <span className="acc_word_error">العربية</span>
          <span className="acc_point">.</span>
          <span className="acc-ww-error">إضافة علامة ترقيم</span>
          <span className="acc_more_v" />
        </h2>
        <div className="accordionItemContent">
          <nav className="acc_sugg_words">
            <a
              href="javascript:ReplaceContentInContainer('error-04','العربية ،');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              العربية ،
            </a>
          </nav>
          <div className="acc_con_text_wrap width_9">
            <p className="acc_con_text">
              الفاصلة، ويطلق عليها أيضا الفارزة، والشولة ( ، ) يجب اضافتها بعد
              كلمة <b>العربية</b>.
            </p>
          </div>
          <div className="acc_word_details">
            <p className="txt_color_bold">مواضع استعمال الفاصلة:</p>
            <p className="txt_color_black">
              أ- بين الجمل التي يتكون من مجموعها كلام تام الفائدة في معنى معين،
              مثل:
            </p>
            <p className="txt_color_gray">
              - إن محمداً طالب مهذب، لا يؤذي أحداً، ولا يكذب في كلامه، ولا يقصر في
              دروسه.
              <br />
              - الخطبة كلام يلقى على جمهور من الناس، بهدف الإقناع والتاثر، وحث
              الناس على الالتزام بقضية معينة.
            </p>
            <p className="txt_color_black">
              ب- بين الجمل القصيرة المعطوفة المستقلة في معانيها، مثل:
            </p>
            <p className="txt_color_gray">
              - الصدق فضيلة، والكذب رذيلة، والحسد منقصة وعجز.
              <br />
              - الدنيا خير كتاب، والزمان خير معلم، والله خير الأصدقاء.
            </p>
            <p className="txt_color_black">
              ج- بين الجمل الصغرى أو أشباه الجمل، بدلاً من حرف العطف، مثل:
            </p>
            <p className="txt_color_gray">
              - سافر أخي، ابتعدت به السفينة، حزنت كثيراً.
              <br />
              - عند النهر، فوق الرابية، تحت سماء صافية، انتشر قطيع الغنم.
            </p>
          </div>
          <nav className="acc_left_option">
            <a
              href="javascript:void(0);"
              className="btn_delete"
              data-tooltip="حذف"
              data-tooltip-right
            />
            <div className="btn_feedback_wrap">
              <span className="btn_feedback" />
              <div className="acc_dropdown_feedback">
                <a href="javascript:void(0);">مقترح غير صحيح</a>
                <a href="javascript:void(0);">محتوى غير لائق</a>
              </div>
            </div>
            <div className="acc_more_details_wrap">
              <a
                onClick={this.showWordDetails}
                className="btn_more"
                data-tooltip="تفصيل أكثر"
                data-tooltip-right
              />
              <a
                onClick={this.hideWordDetails}
                className="btn_more_up"
                data-tooltip="أغلق التفاصيل"
                data-tooltip-right
              />
            </div>
          </nav>
        </div>
      </div>
      <div className="accordionItem close">
        <h2 className="accordionItemHeading">
          <span className="acc_word_error">العربية</span>
          <span className="acc_point">.</span>
          <span className="acc-ww-error">إضافة علامة ترقيم</span>
          <span className="acc_more_v" />
        </h2>
        <div className="accordionItemContent">
          <nav className="acc_sugg_words">
            <a
              href="javascript:ReplaceContentInContainer('error-04','العربية ،');"
              data-tooltip="أنقر لتصحيح الخطاء الإملائي"
              data-tooltip-top
            >
              العربية ،
            </a>
          </nav>
          <div className="acc_con_text_wrap width_9">
            <p className="acc_con_text">
              الفاصلة، ويطلق عليها أيضا الفارزة، والشولة ( ، ) يجب اضافتها بعد
              كلمة <b>العربية</b>.
            </p>
          </div>
          <div className="acc_word_details">
            <p className="txt_color_bold">مواضع استعمال الفاصلة:</p>
            <p className="txt_color_black">
              أ- بين الجمل التي يتكون من مجموعها كلام تام الفائدة في معنى معين،
              مثل:
            </p>
            <p className="txt_color_gray">
              - إن محمداً طالب مهذب، لا يؤذي أحداً، ولا يكذب في كلامه، ولا يقصر في
              دروسه.
              <br />
              - الخطبة كلام يلقى على جمهور من الناس، بهدف الإقناع والتاثر، وحث
              الناس على الالتزام بقضية معينة.
            </p>
            <p className="txt_color_black">
              ب- بين الجمل القصيرة المعطوفة المستقلة في معانيها، مثل:
            </p>
            <p className="txt_color_gray">
              - الصدق فضيلة، والكذب رذيلة، والحسد منقصة وعجز.
              <br />
              - الدنيا خير كتاب، والزمان خير معلم، والله خير الأصدقاء.
            </p>
            <p className="txt_color_black">
              ج- بين الجمل الصغرى أو أشباه الجمل، بدلاً من حرف العطف، مثل:
            </p>
            <p className="txt_color_gray">
              - سافر أخي، ابتعدت به السفينة، حزنت كثيراً.
              <br />
              - عند النهر، فوق الرابية، تحت سماء صافية، انتشر قطيع الغنم.
            </p>
          </div>
          <nav className="acc_left_option">
            <a
              href="#"
              className="btn_delete"
              data-tooltip="حذف"
              data-tooltip-right
            />
            <div className="btn_feedback_wrap">
              <span className="btn_feedback" />
              <div className="acc_dropdown_feedback">
                <a href="javascript:void(0);">مقترح غير صحيح</a>
                <a href="javascript:void(0);">محتوى غير لائق</a>
              </div>
            </div>
            <div className="acc_more_details_wrap">
              <a
                onClick={this.showWordDetails}
                className="btn_more"
                data-tooltip="تفصيل أكثر"
                data-tooltip-right
              />
              <a
                onClick={this.hideWordDetails}
                className="btn_more_up"
                data-tooltip="أغلق التفاصيل"
                data-tooltip-right
              />
            </div>
          </nav>
        </div>
      </div>
    </article>
  </section>

      );
  }
}   

export default PunctuationTap  ; 





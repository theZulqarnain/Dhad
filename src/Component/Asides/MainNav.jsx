import React, { Component } from 'react'



class MainNav extends Component {
    constructor(props) {
        super(props)
        this.showStatics = this.showStatics.bind(this)  
        this.fontChange = this.fontChange.bind(this)
    }
    showStatics = () => {
        var checkBox = this.refs.staticsCheck 
        var text = document.getElementById("textStatics")
        if (checkBox.checked === true){
            text.style.display = "block"
            } else {
                   text.style.display = "none"
            }
    }
  // Change font to Nasikh font in dhad editor
	 fontChange = () =>  {
    var checkBox3 = this.refs.fontChangeCheck 
    var text3 = document.getElementById("dhad-editor")
    if (checkBox3.checked === true){
        text3.style.fontFamily = "DroidNaskhRegular"
    	} else {
       		text3.style.fontFamily = "Droid"
    	}
	}
    
  fontSize = () => {
    var checkBox2 = this.refs.fontSizeCheck 
    console.log(checkBox2)
    var text2 = document.getElementById("dhad-editor")
    if (checkBox2.checked === true){
        text2.style.fontSize = "20px"
      } else {
            text2.style.fontSize = "16px"
      }
  }
render(){
 
    return(
      <aside id="sidebar-right" className="sidebar_r" aria-label="Main Navigation">
  <ul>
    <li>
      <a
        href="#"
        className="lnk_logo"
        data-tooltip="الرجوع الى الرئيسية"
        data-tooltip-left
      />
    </li>
    <li>
      <a href="#"  className="lnk_add_file" />
      <ul>
        <li>
          <a href="#"  className="lnk_add_file">
            مستند جديد
          </a>
        </li>
        <li>
          <a href="#"  className="lnk_upload">
            رفع ملف
            <input type="file" name="uploadfile"  />
          </a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#"  className="lnk_download" />
      <ul>
        <li>
          <a href="#"  className="lnk_download">
            تنزيل الملف
          </a>
        </li>
        <li>
          <a href="#"  className="lnk_printer">
            طباعة الملف
          </a>
        </li>
        <li>
          <a href="#"  className="lnk_copy">
            نسخ النص
          </a>
        </li>
      </ul>
    </li>
  </ul>
  <ul className="nav_bottom">
    <li>
      <a href="#"  className="lnk_controls" />
      <ul className="sub_menu_option">
        <li className="hr">
          <p>خيارات المحرر</p>
        </li>
        <li>
          <div className="switch_box box_1">
            <input type="checkbox" className="switch_1 f_r" defaultChecked />
            <span className="switch_text">
              القفز التلقائي إلى التنبيه التالي
            </span>
            <span
              className="help_icon"
              data-tooltip="عندما التنبيه يصحح أو يتم تجاوزه ، تلقائيًا يتم القفز الى التنبيه الذي يليهُ."
              data-tooltip-top
            />
          </div>
        </li>
        <li>
          <div className="switch_box box_1">
            <input
              id="staticsCheck"
              ref="staticsCheck"
              onClick={this.showStatics}
              type="checkbox"
              className="switch_1 f_r"
            />
            <span className="switch_text">إظهار عدد الكلمات</span>
            <span
              className="help_icon"
              data-tooltip="حساب عدد الكلمات سوف يظهر تلقائي في أسفل الصفحة."
              data-tooltip-top
            />
          </div>
        </li>
        <li>
          <div className="switch_box box_1">
            <input
              id="fontSizeCheck"
              ref="fontSizeCheck"
              onClick={this.fontSize}
              type="checkbox"
              className="switch_1 f_r"
            />
            <span className="switch_text">تكبير حجم خط النص</span>
          </div>
        </li>
        <li>
          <div className="switch_box box_1">
            <input
              id="fontChangeCheck"
              ref="fontChangeCheck" 
              onClick={this.fontChange}
              type="checkbox"
              className="switch_1 f_r"
            />
            <span className="switch_text">تغيير نوع الخط الى خط النسخ</span>
          </div>
        </li>
      </ul>
    </li>
    <li>
      <a href="#"  className="lnk_support" />
      <ul>
        <li>
          <a href="#" >
            الدعم الفني
          </a>
        </li>
        <li className="hr">
          <a href="#" >
            رأيك في ضاد
          </a>
        </li>
        <li>
          <a href="#" >
            سياسات الخصوصية
          </a>
        </li>
        <li>
          <a href="#" >
            شروط الأستخدام
          </a>
        </li>
      </ul>
    </li>
  </ul>
</aside>


    )
 }
}   

export default MainNav  





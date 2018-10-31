import React, { Component } from 'react';

/*

In this component we need to set props dyinamicaly to check if the changes in the 
edtiort has been saved and to set anthor props to show a spinner while checking 
the content and stop sipinner when we got a respones from the server 
*/
// Appear left aside with Assistant wrap
export	const  showAssistant = () =>  {
		var assi_btn = document.getElementById("assistant-btn");
		var editor_wrap = document.getElementById("editor-wrap");
		var close_assi = document.getElementById("close-assistant-btn");
		//var mis_count = document.getElementById("misspelled-count-wrap");
		var rank = document.getElementById("rank-wrap");
		var sidebar_left_bottom = document.getElementById("sidebar-left-bottom");
		var sugg_wrap = document.getElementById("sugg-wrap");
		var footer_wrap = document.getElementById("editor-footer");

		assi_btn.style.width = "45px";
		assi_btn.style.backgroundPosition = "center center";
		editor_wrap.style.width = "40%";
		editor_wrap.style.marginRight = "0";
		setTimeout(function(){ close_assi.style.display = "block"; }, 700);
		//mis_count.style.visibility = "hidden";
		setTimeout(function(){ rank.style.display = "block"; }, 500);
		sidebar_left_bottom.style.display = "none";
		sugg_wrap.style.width = "50%";
		sugg_wrap.style.overflow = "visible";
		footer_wrap.style.paddingRight = "8%";
		
		//Add Class
		editor_wrap.classList.add('open_assis');
		
		stopDropDownList();
		pu_style();
	}
	
  //Stop Suggitions words
export	const 	 stopDropDownList = () => { 
		var ele = document.getElementsByClassName("sugg_dropdown");
		 let i ; 
		for(i = 0; i < ele.length; i++) {
		ele[i].style.visibility = "hidden";
		}
	}
	export const  pu_style = () =>  {
		var els_pu = document.getElementsByClassName('dh_pu_error');
		let i ;
		for(i = 0; i < els_pu.length; i++) {
		els_pu[i].style.borderBottom = "rgba(247,153,81,0.5) 3px solid";
		}
	}
  // Close left aside with Assistant wrap
    export	const 	 closeAssistant = () =>  {
		var assi_btn = document.getElementById("assistant-btn");
		var editor_wrap = document.getElementById("editor-wrap");
		var close_assi = document.getElementById("close-assistant-btn");
		//var mis_count = document.getElementById("misspelled-count-wrap");
		var rank = document.getElementById("rank-wrap");
		var sidebar_left_bottom = document.getElementById("sidebar-left-bottom");
		var sugg_wrap = document.getElementById("sugg-wrap");
		var footer_wrap = document.getElementById("editor-footer");
		
		assi_btn.style.width = "150px";
		assi_btn.style.backgroundPosition = "160px center";
		editor_wrap.style.width = "50%";
		editor_wrap.style.marginRight = "20%";
		close_assi.style.display = "none";
		//setTimeout(function(){ mis_count.style.visibility = "visible"; }, 500);
		rank.style.display = "none";
		sidebar_left_bottom.style.display = "block";
		sugg_wrap.style.width = "0px";
		sugg_wrap.style.overflow = "hidden";
		footer_wrap.style.paddingRight = "23%";
		
		//Remove Class
		editor_wrap.classList.remove('open_assis');
		
		startDropDownList();
		pu_unstyle()
	}
  
//Show Suggitions words
export	const  startDropDownList = () =>  {
	var ele = document.getElementsByClassName("sugg_dropdown");
	for( let i = 0; i < ele.length; i++) {
	ele[i].style.visibility = "visible";
	}
}
export	const  pu_unstyle = () =>  {
	var els_pu = document.getElementsByClassName('dh_pu_error');
	for(  let i = 0; i < els_pu.length; i++) {
	els_pu[i].style.borderBottom = "none";
	}
}

class Header extends Component {
  


render(){
    return(
			<header id="editor-header" className="editor_header">
			<span id="saved-done" className="saved">
				تم الحفظ
			</span>
			<div className="assistan_btn_wrap">
				<a
					href="#"
					id="assistant-btn"
					onClick={showAssistant}
					className="btn btn_sm animated_button victoria_four"
				>
					<span id="assi-condition">
						<label className="lnk_logo" />
						<label>أبدا التدقيق مع ضاد</label>
					</span>
					<span id="che-condition">
						<label className="checking" />
						<label>يفحص..</label>
					</span>
				</a>
			</div>
			<div
				id="rank-wrap"
				className="rank_wrap f_l"
				data-tooltip="المحتوى الذي تم كتابته لديه درجة أعلى من 60% من كل المحتوى الذي تم فحصة بأستخدام ضاد حسب أهداف المقارنة التي تم وضعها"
				data-tooltip-bottom
			>
				<b>60</b>
				<p>تقييم المحتوى</p>
			</div>
			<div className="close_assistant_wrap">
				<span
					id="close-assistant-btn"
					onClick={closeAssistant}
					className="close_assistant_btn"
				/>
			</div>
		</header>
		
    );
 }
}   

export default Header ; 





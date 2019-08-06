// JavaScript Document

(function($){
$(document).ready(function(){
	
	//Spineer button loading
	$('.has-spinner').click(function () {
        var btn = $(this);
        $(btn).buttonLoader('start');
        setTimeout(function () {
            $(btn).buttonLoader('stop');
        }, 3000);
    });
	
	//get Selected word for Feedback and Maajeem word.
	$('div#dhad-editor').dblclick(function(ebj) {
		
		$(".loading_content").animate({width:"100%"}, 1200);
		
		setTimeout(function(){ $(".loading_content").css({
			"display" : "none",
			"width" : "10%"
		}); }, 1300);
		
		setTimeout(function(){ $("#feedback-maajeem-wrap-loading").slideDown(600); }, 1300);
		

		// clear selected text
		$("#get-selected-text").empty();
		$("#get-selected-text2").empty();
		
		var container3 = $(".selected_txt");
		var txtt = container3.text();
		container3.replaceWith(txtt);

		var tex = getSelected().toString().length;
		var selection = getSelected();
    	var selection_text = selection.toString();

		if (tex == 0 || tex == 1){
			$('#feedback-maajeem-wrap').css({'display':'none'});
		}else{
			
    		// How do I add a span around the selected text?
			var span = document.createElement('SPAN');
			span.className = "selected_txt";
			span.textContent = selection_text;
			var range = selection.getRangeAt(0);
			range.deleteContents();
			range.insertNode(span);
			
			// print selected text
			$("#get-selected-text").append( getSelected().toString() );
			$("#get-selected-text2").append( getSelected().toString() );
			
			// Display feedback wrap or box.
			$('#feedback-maajeem-wrap').css({'display':'block'});
			var posY = ebj.pageY + 26;
			var posX = ebj.pageX - 250;
			
			$('#feedback-maajeem-wrap').css(
				{
					'left' : posX + 'px',
					'top' : posY + 'px'
				});

		}

	});
	
	var getSelected = function(){
		var t = '';
		if(window.getSelection) {
			t = window.getSelection();
		} else if(document.getSelection) {
			t = document.getSelection();
		} else if(document.selection) {
			t = document.selection.createRange().text;
		}
		return t;
	};
	
	
	//Replace content in suggations words.
	$("#get-suggition-words span").click(function() {
		var sug_word = $(this).html();
		$(".selected_txt").text(sug_word+" ");
	});
	
	//Replace content of Maajeem tab.
	$("#maajeem-dhad-wrapper .panel a").click(function() {
		var sug_word = $(this).html();
		$(".selected_txt").text(sug_word+" ");
	});
	
	
	//Show Maajeem Dhad Wrapper.
	$("#maajeem-dhad-wrap span.link").click(function() {
		setTimeout(function(){ $("#maajeem-dhad-wrapper").animate({left: "0px"},500); }, 2600);
		setTimeout(function(){ $("#editor-wrap").animate({width: "40%"},500); }, 2600);
		setTimeout(function(){ $("#feedback-maajeem-wrap").slideUp(500); }, 2600);
		closeAssistant();
	});
	
	
	//Clear High Lieght when editting.
	/*$('#dhad-editor').on('keyup', function(){
		var selection = window.getSelection();
		var node = selection.focusNode.parentNode;
		var nodeparent = selection.focusNode.parentNode.parentNode;
		var input = $(node).text();		
		
		if ($(node).is('label')){
			
			$(nodeparent).replaceWith(input);
			  
		};
		
	  });*/
	
	//Get position of scrollbar in #spell-wrapper ID
	$("#dhad-editor").hover(function(e) {
		$(this).css("overflow-y", "scroll");
	});
	
	$("#dhad-editor").mouseleave(function(e) {
		$(this).css("overflow-y", "hidden");
	});
	
	$("#spell-wrapper").hover(function(e) {
		$(this).css("overflow-y", "scroll");
	});
	
	$("#spell-wrapper").mouseleave(function(e) {
		$(this).css("overflow-y", "hidden");
	});
	
	
	
	
	
	
	/*$("span.dh_sp_error").click(function(e) {
		e.preventDefault();
		var index = $(this).index();
		//alert(index);
		
		$("#spell-wrapper").css("overflow-y", "scroll");
		
		$("#spell-wrapper").animate({
			scrollTop: $("#spell-wrapper .accordionItem:eq(" + index + ")").offset().top
		}, 2000);
		
		$("#spell-wrapper .accordionItem:eq(" + index + ")").hide();
		
		setTimeout(function(){ $("#spell-wrapper").css("overflow-y", "hidden"); }, 1000);
		
	});*/
	
	
	
	/*$(".dh_sp_error").click(function(e) {
		e.preventDefault();
		var position = $(this).position().top;
		$("#spell-wrapper").css("overflow-y", "scroll");
		$("#spell-wrapper").animate({
			scrollTop: position
		}, 600);
		setTimeout(function(){ $("#spell-wrapper").css("overflow-y", "hidden"); }, 1000);
	});*/
	
	//Tabs close in mobile screen
	$(".tabcontent .tab_cont_close").click(function() {
		$(this).parent().slideUp(600);
    });
	
	//Menu Show
	$(".menu_show").click(function() {
		$("#sidebar-right").animate({right: "0px"},300);
		$(this).css({'display':'none'});
		setTimeout(function(){ $(".menu_hide").slideDown(300); }, 600);
    });
	
	//Menu Hide
	$(".menu_hide").click(function() {
		$("#sidebar-right").animate({right: "-100px"},300);
		$(this).css({'display':'none'});
		setTimeout(function(){ $(".menu_show").fadeIn(300); }, 600);
    });
	
	//Dark theme
	$(".dhad_dark_theme").click(function() {
		$(this).css({'display':'none'});
		setTimeout(function(){ $(".dhad_light_theme").fadeIn(300); }, 600);
		$(body).addClass("dhad_dark_wrap");
    });
	
	//Light theme
	$(".dhad_light_theme").click(function() {
		$(this).css({'display':'none'});
		setTimeout(function(){ $(".dhad_dark_theme").fadeIn(300); }, 600);
		$(body).removeClass("dhad_dark_wrap");
    });

	//submenu of main menu
	$("#sidebar-right>ul>li.has_sub").mouseenter(function() {
		$(this).children("a").addClass("active");
        $(this).children("ul").slideDown(300);
    }).mouseleave(function() {
		$(this).children("a").removeClass("active");
		$(this).children("ul").slideUp(300);
    });
	
	$("#sidebar-right>ul>li.has_sub_click").click(function() {
		$(this).children("a").addClass("active");
        $(this).children("ul").slideToggle(300);
		
	}).mouseleave(function() {
		$(this).children("a").removeClass("active");
		$(this).children("ul").slideUp(300);
 
    });
	
	//Remove Class .dh_sp_error when click suggitions words.
	$("#spell-wrapper .acc_sugg_words a").click(function(){		
		var i = $(this).parent().parent().parent().index();
		$('#dhad-editor .dh_sp_error:eq(' + i + ')').removeClass('dh_sp_error');		
	
		$(this).parent().parent().parent().slideUp(600, function(){
			$(this).remove();
		});
		
	});
	
	//Remove ignore List 
	$(".ignore_list li a").click(function(){
		$(this).parent().slideUp(200);
	});
	
	//Remove Suggitions
	$(".accordionItem div nav a.btn_ignore").click(function(){
		$(this).parent().parent().parent().slideUp(400);
	});
	
	//Remove all Suggitions
	$("#spell-ignore-all").click(function(){
		var sp = $("#spell-wrapper").children().length;
		for(i = 0; i < sp; i++){	
			$("#spell-wrapper").children().eq(i).slideUp(800);
		}
	});
	
	//Hover Spell Error
	$(".dh_sp_error").hover(function(){
		$(this).attr('contentEditable')=='true';
	});
	
	//Hide popup and elements
	$("#all-wrapper").mouseup(function(e) {
		
		var container = $(".coming_soon_box");
		if (!container.is(e.target) && container.has(e.target).length === 0) 
		{
			container.hide();
			$("ul.nav_l_bottom li a").removeClass("active");
		}
		
		var container2 = $("#feedback-maajeem-wrap");
		if (!container2.is(e.target) && container2.has(e.target).length === 0) 
		{
			container2.css({
				'display':'none',
				'left':'auto',
				'top':'auto'
			});
			$(".loading_content").css({"display":"block"});
			$("#feedback-maajeem-wrap-loading").hide();
		}
		
		var container3 = $(".selected_txt");
		if (!container3.is(e.target) && container3.has(e.target).length === 0) 
		{
			var txtt = container3.html();
			container3.replaceWith(txtt);
		}
		
	});
	
});
})(jQuery);


	//Window on Load.
	window.onload = function(){
		
		document.getElementById("dhad-editor").addEventListener("keydown", checkingShow);
		document.getElementById("dhad-editor").addEventListener("keydown", countErrorShow);
		document.getElementById("dhad-editor").addEventListener("keydown", showSavedBtn);
		//document.getElementById("dhad-editor").addEventListener("keydown", savedDone);	
		
		//Loading Page
		let stateCheck = setInterval(() => {
		  if (document.readyState === 'complete') {
			clearInterval(stateCheck);
			// document ready
			  document.getElementById("all-wrapper").style.visibility = "visible";
			  document.getElementById("loader").style.display = "none";
		  }
		}, 100);
		
		countErrorShow();
		
	}
	
	//Start Function of JS.......
	
	//Coming soon box plagirasim & proof
	function plpr_coming_soon(wrap){
		var ele = wrap.nextElementSibling;
		ele.style.display = "block";
		wrap.className = "active";
	}
	
	//Notification Error Function
	function launch_error() {
		var error_ = document.getElementById("notification-error")
		error_.className = "show";
		setTimeout(function(){ error_.className = error_.className.replace("show", ""); }, 5000);
	}

	//Notification Success Function
	function launch_success() {
		var success_ = document.getElementById("notification-success")
		success_.className = "show";
		setTimeout(function(){ success_.className = success_.className.replace("show", ""); }, 5000);
	}

	//show and hide style of pun_spell_check
	function pu_style() {
		var els_pu = document.getElementsByClassName('dh_pu_error');
		for(i = 0; i < els_pu.length; i++) {
		els_pu[i].style.borderBottom = "rgba(247,153,81,0.5) 3px solid";
		}
	}
	function pu_unstyle() {
		var els_pu = document.getElementsByClassName('dh_pu_error');
		for(i = 0; i < els_pu.length; i++) {
		els_pu[i].style.borderBottom = "none";
		}
	}

	//Get Position for list words suggitions
	function getPostion(obj) {
		
		var s_ele = obj.children[1];
		var sh = s_ele.clientHeight + 3;
		var pt = obj.getBoundingClientRect().top;
		var bh = body.clientHeight;
		var bp = bh*80/100;
		
		var ww = body.clientWidth;
		var wl = obj.parentNode.parentNode.offsetLeft;
		var pl = obj.offsetLeft;
		var ll = pl - wl;
		//alert(ww);
		
		if(pt>bp){
			s_ele.style.top = - sh + "px";
		}
		
		if(ll<160 && ww>450){
			s_ele.style.right = "auto";
			s_ele.style.left = "0px";
		}
	}

	// Show Saved Button
	function showSavedBtn() {
		var ssb = document.getElementById("saved-btn");
		ssb.style.visibility = "visible";
	}

	//Saved Done
	function savedDone(hideBtn) {
		//setTimeout(function(){ hideBtn.style.visibility = "hidden"; }, 3200);
		hideBtn.style.visibility = "hidden";
		var savdon = document.getElementById("saved-done");
		savdon.className = "show";
		setTimeout(function(){ savdon.className = savdon.className.replace("show", ""); }, 3000);
	}

	//Checking Show
	function checkingShow() {
		
		var che = document.getElementById("che-condition");
		var assi = document.getElementById("assi-condition");
		
		che.className = "show";
		assi.className = "hide";
		setTimeout(function(){ che.className = che.className.replace("show", ""); }, 5000);
		setTimeout(function(){ assi.className = assi.className.replace("hide", ""); }, 5000);
		
	}

	//Show error count
	function countErrorShow() {
		
		var countError = document.getElementsByClassName('dh_sp_error').length;
		var logo = document.getElementById("assi-condition");
		var error = document.getElementById("error-count-condition");
		var assi_btn = document.getElementById("assistant-btn");
		
		if(countError > 0){
			logo.style.display = "none";
			error.style.display = "block";
			assi_btn.style.backgroundColor = "rgba(247,88,91,1.00)";
		} else {
			logo.style.display = "block";
			error.style.display = "none";
			assi_btn.style.backgroundColor = "rgba(77,76,76,1.00)";
		}
		
	}
	
	

	//Snakbar, undo function
	var cWord, clearStyle, removeSugg, errorWord, errorLabel;
	function snackBar(sWord) {

		cWord = sWord.parentNode.parentNode.parentNode;
		var clWord = sWord.parentNode.parentNode;
		var suggList = document.getElementsByClassName("sugg_dropdown");
		
		cWord.classList.remove('dh_sp_error');
		removeSugg = setTimeout(function(){clWord.remove();}, 3500);
		clearStyle = setTimeout(function(){cWord.replaceWith(cWord.textContent);}, 4000);
		
		var x = document.getElementById("snackbar-wrap");
		x.className = "show";
		
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
		
		errorLabel = sWord.parentNode.parentNode.previousElementSibling;
		errorWord = errorLabel.textContent;
		
		for(i = 0; i <= suggList.length; i++){
			suggList[i].style.visibility = "hidden";
			setTimeout(function(){ suggList[i].style.visibility = "visible"; }, 4100);
			break;
		}
	}
	
	/* Undo */
	function _undo() {
		cWord.classList.add('dh_sp_error');
		clearTimeout(clearStyle);
		clearTimeout(removeSugg);
		errorLabel.textContent = errorWord;
	}

	//Stop Suggitions words
	function stopDropDownList() {
		var ele = document.getElementsByClassName("sugg_dropdown");
		for(i = 0; i < ele.length; i++) {
		ele[i].style.visibility = "hidden";
		}
	}

	//Show Suggitions words
	function startDropDownList() {
		var ele = document.getElementsByClassName("sugg_dropdown");
		for(i = 0; i < ele.length; i++) {
		ele[i].style.visibility = "visible";
		}
	}
	
	// Show details of word...
	function showWordDetails(elp){
		var ele = elp.parentNode.parentNode.previousElementSibling;
		var ele_hide = elp.nextElementSibling;
		ele.style.display = "block";
		ele_hide.style.display = "block";
		elp.style.display = "none";
		}

	// Hide details of word...
	function hideWordDetails(elp){
		var ele = elp.parentNode.parentNode.previousElementSibling;
		var ele_show = elp.previousElementSibling;
		ele.style.display = "none";
		ele_show.style.display = "block";
		elp.style.display = "none";
		}
	
	// Animation when writting in subject input
	function animEditor(){
		var input = document.getElementById("dhad-subject");
		var wrap = document.getElementById("editor-wrap");
		
		if (input.value == ""){
        wrap.style.marginTop = "80px";
    	} else {
			wrap.style.marginRight = "0";
			setTimeout(function(){ wrap.style.marginTop = "40px"; }, 500);
    	}
	}
	
	// appear text statistics in footer wrap
	function showStatics() {
    var checkBox = document.getElementById("staticsCheck");
    var text = document.getElementById("textStatics");
    if (checkBox.checked == true){
        text.style.display = "block";
    	} else {
       		text.style.display = "none";
    	}
	}
	
	// Increase font size in dhad editor
	function fontSize() {
    var checkBox2 = document.getElementById("fontSizeCheck");
    var text2 = document.getElementById("dhad-editor");
    if (checkBox2.checked == true){
        text2.style.fontSize = "20px";
    	} else {
       		text2.style.fontSize = "16px";
    	}
	}

	// Change font to Nasikh font in dhad editor
	function fontChange() {
    var checkBox3 = document.getElementById("fontChangeCheck");
    var text3 = document.getElementById("dhad-editor");
    if (checkBox3.checked == true){
        text3.style.fontFamily = "DroidNaskhRegular";
    	} else {
       		text3.style.fontFamily = "Droid";
    	}
	}
	
	// Appear left aside with Assistant wrap
	function showAssistant() {
		var assi_btn = document.getElementById("assistant-btn");
		var editor_wrap = document.getElementById("editor-wrap");
		var close_assi = document.getElementById("close-assistant-btn");
		var mis_count = document.getElementById("misspelled-count-wrap");
		//var rank = document.getElementById("rank-wrap");
		var sidebar_left_bottom = document.getElementById("sidebar-left-bottom");
		var sugg_wrap = document.getElementById("sugg-wrap");
		var footer_wrap = document.getElementById("editor-footer");

		//assi_btn.style.width = "40px";
		assi_btn.style.backgroundPosition = "center center";
		editor_wrap.style.width = "40%";
		editor_wrap.style.marginRight = "0";
		setTimeout(function(){ close_assi.style.display = "block"; }, 700);
		mis_count.style.visibility = "hidden";
		//setTimeout(function(){ rank.style.display = "block"; }, 500);
		sidebar_left_bottom.style.display = "none";
		sugg_wrap.style.width = "50%";
		sugg_wrap.style.overflow = "visible";
		footer_wrap.style.paddingRight = "8%";
		
		//Add Class
		editor_wrap.classList.add('open_assis');
		
		stopDropDownList();
		pu_style();
	}
	
	// Close left aside with Assistant wrap
	function closeAssistant() {
		var assi_btn = document.getElementById("assistant-btn");
		var editor_wrap = document.getElementById("editor-wrap");
		var close_assi = document.getElementById("close-assistant-btn");
		var mis_count = document.getElementById("misspelled-count-wrap");
		//var rank = document.getElementById("rank-wrap");
		var sidebar_left_bottom = document.getElementById("sidebar-left-bottom");
		var sugg_wrap = document.getElementById("sugg-wrap");
		var footer_wrap = document.getElementById("editor-footer");
		
		//assi_btn.style.width = "auto";
		assi_btn.style.backgroundPosition = "right center";
		editor_wrap.style.width = "80%";
		editor_wrap.style.marginRight = "5%";
		close_assi.style.display = "none";
		setTimeout(function(){ mis_count.style.visibility = "visible"; }, 500);
		//rank.style.display = "none";
		sidebar_left_bottom.style.display = "block";
		sugg_wrap.style.width = "0px";
		sugg_wrap.style.overflow = "hidden";
		footer_wrap.style.paddingRight = "23%";
		
		//Remove Class
		editor_wrap.classList.remove('open_assis');
		
		startDropDownList();
		pu_unstyle()
	}
	
	// Tabs in left aside
	function openTab(evt, tabName) {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById(tabName).style.display = "block";
		evt.currentTarget.className += " active";
	}

	//Accordian in left aside
	var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }
	
	// Get the position of scroll in dhad editor	
	/*function posScroll() {
		
		var elmnt = document.getElementById("spell-scroll");
		var x = elmnt.scrollLeft;
		var y = elmnt.scrollTop;
		//document.getElementById ("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
		
		elmnt.scrollTo(0,1200);
		alert(y,x);
		
		
	}*/






export const  openTab  =  (evt, tabName) =>  {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    if(tabName != null ){
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    }

   
}


export const fontSize = (rFontSize) => {
    // var checkBox2 = document.getElementById("fontSizeCheck");
    // var text2 = document.getElementById("dhad-editor");
    // if (checkBox2.checked === true){
    //     text2.style.fontSize = "20px";
    //   } else {
    //        text2.style.fontSize = "16px";
    //   }
   console.log(rFontSize);

   return rFontSize ;
}


export const  toggleItem = () =>  {
    var itemClass = this.parentNode.className;
    for ( let i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass === 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}
// Accordian in left aside
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for ( let i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
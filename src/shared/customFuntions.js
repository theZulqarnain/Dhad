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
//Checking Show
export const  checkingShow = () =>  {
    
    var che = document.getElementById("che-condition");
    var assi = document.getElementById("assi-condition");
    
    che.className = "show";
    assi.className = "hide";
    setTimeout(function(){ che.className = che.className.replace("show", ""); }, 5000);
    setTimeout(function(){ assi.className = assi.className.replace("hide", ""); }, 5000);
    
}
//Saved Done
 export const savedDone = () => {	
    var savdon = document.getElementById("saved-done");
    savdon.className = "show";
    setTimeout(function(){ savdon.className = savdon.className.replace("show", ""); }, 3000);
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
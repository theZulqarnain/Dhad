import React,{Component,useState,useRef} from 'react'
import {connect} from 'react-redux';
import {dataListHandler} from '../action';
import ContentEditable from 'react-contenteditable';
import InputDiv from './Input';
import CaretPositioning from '../components/EditCaretPositioning'




const Main = (props) =>{
  const [html, setHtml] = useState('');
  const [index, setIndex] = useState(0);
  const [lastPara, setLastPara] = useState(undefined);
  const [paraLength, setParaLength] = useState([])
  const [wrongWords, setWrongWords] = useState({});
  const [caretPosition, setCaretPosition] = useState(0)
  const contentEditable = useRef(null);
  const [cursor, setCursor] = useState(false);
  const [aIndex, setAIndex] = useState(0)
  // let cursor = false;

  const handleChange = (e) =>{
    if(contentEditable.current.childNodes[0]['nodeName'] === '#text') {
      var textNode = contentEditable.current.childNodes[0];
      var div = document.createElement('div');
      // if(textNode.innerHTML !== undefined){
      //   div.innerHTML = textNode.innerHTML;
      // }
      div.innerHTML = e.target.value;
      textNode.parentNode.replaceChild(div,textNode)
      let savedCaretPosition = CaretPositioning.saveSelection(contentEditable.current);
      let position = {start:savedCaretPosition.start+1,end:savedCaretPosition.end+1}
      CaretPositioning.restoreSelection(contentEditable.current, position);
    }else{
      let text = e.target.value;
      let savedCaretPosition = CaretPositioning.saveSelection(contentEditable.current);
      let childrenDiv = contentEditable.current.children;

      let curIndex = childrenDiv.length-1;
      let latestPara;
      if(childrenDiv[curIndex] && childrenDiv[curIndex].innerText){
         latestPara = childrenDiv[curIndex].innerText;
      }else{
        // contentEditable.current.innerHTML="<div>need to handle place holder</div>"

        // contentEditable.appendChild("<div></div>")
        // contentEditable.createElement("div")
      }
      let previousPara = null;
      
      if(curIndex === 0){
        previousPara = latestPara;
      }else{
        previousPara = childrenDiv[childrenDiv.length-2].innerText;
      }


      if(curIndex !== index){
        if(childrenDiv.length < paraLength.length){
            // console.log('delete last index')
            for(let i=0;i < childrenDiv.length;i++){
              if((childrenDiv[i].innerText).length !== paraLength[i]){
                 paraLength.splice(i,1)
              }
            }
        }
        setIndex(curIndex);
        if(paraLength.length === 0){
          setParaLength([previousPara.length])
        }
        
      }else if(curIndex === index ){
        if(latestPara.length !== (lastPara && lastPara.length)){
          setLastPara(latestPara);
          let newParaLength = paraLength;
          newParaLength[curIndex] = latestPara.length;
          setParaLength(newParaLength);
          contentEditable.current.onkeydown = (e)=>callAPI(e)
        }else{
          
          for(let i=0;i < childrenDiv.length;i++){
            let test = ((paraLength[i]));
            if(((childrenDiv[i].innerText).length) !== test){
              // console.log(typeof((childrenDiv[i].innerText).length) , typeof(paraLength[i]),((childrenDiv[i].innerText).length) , (paraLength[i]),'in loop',childrenDiv[i])

                let newParaLength = paraLength;
                newParaLength[i] = (childrenDiv[i].innerText).length;
                setParaLength(newParaLength);
                // console.log((childrenDiv[i].innerText).length,'innerloop',paraLength[i]);
                contentEditable.current.onkeydown = (e)=>callAPI(e,childrenDiv[i].innerText)
                // if(childrenDiv.length < paraLength.length){
                //   console.log('delete last ')
                // }
            }
            // console.log((childrenDiv[i].innerText).length,childrenDiv[i].innerText,'in for',paraLength[i])
            if(childrenDiv[i].innerHTML === "<br>"){
              paraLength.splice(i,1)
            }
          }
        }

      }
      setCaretPosition(savedCaretPosition)
      setHtml(text)
      console.log(text)
    }
    
  }
  const callAPI = async (e,text,) =>{
    // console.log(e.which)
    if(e.which === 13 || e.which === 190 || e.which === 32){
    //  console.log('api get called')
      if(text){
        let apiRes = {
          'wrong1':"wrong",
          'test1':"test",
          'highlight1':'highlight',
          'wrong1':"wrong",
        }
        let highlightWords = {}
        for (let key in apiRes) {
          // console.log('enter')
          if (apiRes.hasOwnProperty(key)) {
            let element = apiRes[key];
            // console.log(element,key);
            
          }
        }
        // setWrongWords(highlightWords)
        // highlightWordsHandler(apiRes)
      }else{
        var arr = ['wrong1', 'test1', 'highlight1', 'wrong1'];
        var counts = {};

        for (var i = 0; i < arr.length; i++) {
          var num = arr[i];
          counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        // console.log(counts);
        let apiRes = {
          'wrong1':"wrong",
          'test1':"test",
          'highlight1':'highlight'
        }
        let highlightWords = wrongWords;
        for (let key in apiRes) {
          // console.log('enter')
          if (!(wrongWords.hasOwnProperty(key))) {
            let element = apiRes[key];
            highlightWords[key] = {suggestions:[element],highlighted:false,count:counts[key]}
            // console.log(apiRes[key],'new val')
          }
        }

        // const keys = Object.keys(apiRes);
        // keys.forEach(key => {
        //   // console.log(apiRes[key])
        //   if (!(wrongWords.hasOwnProperty(key))) {
        //     let element = apiRes[key];
        //     highlightWords[key] = {suggestions:[element],highlighted:false}
        //     // console.log(apiRes[key],'new val')
        //   }
        // })  
        // 
        // console.log(highlightWords);

        // setWrongWords(highlightWords)
        highlightWordsHandler(highlightWords)
        // contentEditable.current.innerHTML="<div>need to handle place holder</div>"
      }
    }
  }
  const highlightWordsHandler = (highlightWords) =>{
    console.log(contentEditable);
    let childrenDiv = contentEditable.current.children[0].innerHTML;
    let unHighlightWord = highlightWords
    // console.log(childrenDiv)
    // let keys = Object.keys(apiRes)
    // for (let node in contentEditable.current.childNodes[0].childNodes) {
    //   console.log(contentEditable.current.childNodes[0].childNodes,node)
    // }
    for (let key in highlightWords) {
      // console.log('enter')
      if (((highlightWords.hasOwnProperty(key)) && highlightWords[key]['highlighted'] === false) || (highlightWords[key]['count'] < wrongWords[key]['count'])) {
        // console.log("enter",highlightWords[key]['count'], wrongWords[key]['count'],highlightWords[key])
        if(contentEditable.current.childNodes[0].childNodes.length > 1){
          // contentEditable.current.childNodes[0].childNodes.map(text =>{
          //   console.log(text.innerHTML)
  
          // })
          // for (let node in contentEditable.current.childNodes[0].childNodes) {
          //   console.log(contentEditable.current.childNodes[0].nodeName)
          // }
        }
        
        // console.log(contentEditable.current.childNodes[0].childNodes.length)
        if((childrenDiv.match(key)) ){
          // console.log(key,'matched')
            unHighlightWord[key]['highlighted'] = true;
            unHighlightWord[key]['count'] = highlightWords[key]['count'];

            let rplc = `<span class='error' id=${aIndex} >${key}</span>`
            
            
            let position = {start:caretPosition.start+1,end:caretPosition.end+1}

            contentEditable.current.children[0].innerHTML = (contentEditable.current.children[0].innerHTML).replace(new RegExp(key), rplc);
            // contentEditable.current.children[0].innerHTML.normalize();

            let fetchEl = document.getElementById(aIndex);
            fetchEl.addEventListener("click", test);
            
            // setHtml((contentEditable.current.children[0].innerHTML).replace(val, rplc))
            // CaretPositioning.restoreSelection(contentEditable.current, position);
            setCursorAfterElement(document.getElementById(aIndex));
          }
          // let element = apiRes[key];
          // highlightWords[key] = {suggestions:[element],highlighted:false}
          // // console.log(apiRes[key],'new val')
      }
    }
    setWrongWords(unHighlightWord)

    // keys.map(val =>{

    //   if((childrenDiv.match(val)) && cursor === false){
    //     // setCursor(true);
    //     // let rplc = `<span class='error' id="childSpan">${val}</span>`
    //     // let test = childrenDiv.replace(val, apiRes[val]);
    //     // let position = {start:caretPosition.start+1,end:caretPosition.end+1}
    //     // contentEditable.current.children[0].innerHTML = (contentEditable.current.children[0].innerHTML).replace(new RegExp(val), rplc);
    //     // contentEditable.current.children[0].innerHTML.normalize();
    //     // // setHtml((contentEditable.current.children[0].innerHTML).replace(val, rplc))
    //     // // CaretPositioning.restoreSelection(contentEditable.current, position);
    //     // setCursorAfterElement(document.getElementById('childSpan'));
    //     // console.log(contentEditable.current.children,'wrongwrods',rplc,caretPosition)


    //   }

    // })


  }
  const test = (event)  =>{
    console.log(event.target.id)
  }
  const  setCursorAfterElement =(ele) =>{
    if (!ele.nextElementSibling) {
      var dummyElement = document.createElement('a')
      dummyElement.appendChild(document.createTextNode('\u00A0'))
      ele.parentNode.appendChild(dummyElement)
    //  console.log(ele.parentNode,'parent node')
    }
    var nextElement = ele.nextElementSibling
    nextElement.tabIndex=aIndex;
    // nextElement.id=1
    nextElement.focus()
    var r = document.createRange();
    r.setStart(nextElement.childNodes[0], 1);
    r.setEnd(nextElement.childNodes[0], 1);
    // console.log("nextelement",nextElement.childNodes[0])
    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(r);
    setAIndex(aIndex+1)

    // document.execCommand("delete", false, null);
  }
  // console.log(caretPosition)
  return(
    <div className="Editor">
            <h2>Dhad Editor</h2>
            {/* <InputDiv/> */}
            <ContentEditable
                datatext="Enter text here"
                innerRef={contentEditable}
                html={html} // innerHTML of the editable div
                disabled={false} // use true to disable edition
                onChange={handleChange} // handle innerHTML change
                className="dhad_editor"
                spellCheck="false"
                placeholder={"Write something here!"}
                // onKeyDown={this.handleEnter}
            />
            <button onClick={()=>dataListPass()}>submit</button>
        </div>
  )
}
const mapStateToProps = (state) =>{
  return{
      DataList:state.MainReducer.data_list
  }
}
export default connect(mapStateToProps,{dataListHandler})(Main);
import React,{Component,useState,useRef} from 'react'
import {connect} from 'react-redux';
import {dataListHandler} from '../action';
import ContentEditable from 'react-contenteditable';
import InputDiv from './Input';
import CaretPositioning from '../components/EditCaretPositioning'




const Main = (props) =>{
  const [html, setHtml] = useState("<div>Enter something here!</div>");
  const [index, setIndex] = useState(0);
  const [lastPara, setLastPara] = useState(undefined);
  const [paraLength, setParaLength] = useState([])
  const [wrongWords, setWrongWords] = useState({});
  const [caretPosition, setCaretPosition] = useState(0)
  const contentEditable = useRef(null);
  let cursor = false;

  const handleChange = (e) =>{
    // console.log(e.currentTarget)
    let text = e.target.value;
    let savedCaretPosition = CaretPositioning.saveSelection(contentEditable.current);
      let childrenDiv = contentEditable.current.children;

      let curIndex = childrenDiv.length-1;
      let latestPara;
      if(childrenDiv[curIndex] && childrenDiv[curIndex].innerText){
         latestPara = childrenDiv[curIndex].innerText;
      }else{
        contentEditable.current.innerHTML="<div>need to handle place holder</div>"
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
          // console.log('current',latestPara.length)
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
  const callAPI = (e,text,) =>{
    // console.log(e.which)
    if(e.which === 13 || e.which === 190 || e.which === 32){
    //  console.log('api get called')
      if(text){
        let apiRes = {
          'wrong1':"wrong",
          'test1':"test",
          'highlight1':'highlight'
        }
        setWrongWords(apiRes)
        highlightWordsHandler(apiRes)
      }else{
        let apiRes = {
          'wrong1':"wrong",
          'test1':"test",
          'highlight1':'highlight'
        }
        setWrongWords(apiRes)
        highlightWordsHandler(apiRes)
        // contentEditable.current.innerHTML="<div>need to handle place holder</div>"
      }
    }
  }
  const highlightWordsHandler = (apiRes) =>{
    let childrenDiv = contentEditable.current.children[0].innerHTML;
    let keys = Object.keys(apiRes)
    
    // console.log(contentEditable)

    keys.map(val =>{

      if((childrenDiv.match(val)) && cursor === false){
        cursor = true;
        let rplc = `<span class='error'>${val}</span>&nbsp;`
        let test = childrenDiv.replace(val, apiRes[val]);
        let position = {start:caretPosition.start,end:caretPosition.end}
        contentEditable.current.children[0].innerHTML = (contentEditable.current.children[0].innerHTML).replace(/wrong1/i, rplc);
        // setHtml((contentEditable.current.children[0].innerHTML).replace(val, rplc))
        CaretPositioning.restoreSelection(contentEditable.current, position);
        console.log(contentEditable.current.children,'wrongwrods',rplc,caretPosition)


      }

    })


  }
  console.log(caretPosition)
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
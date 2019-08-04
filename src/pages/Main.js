import React,{Component,useState,useRef} from 'react'
import {connect} from 'react-redux';
import {dataListHandler} from '../action';
import ContentEditable from 'react-contenteditable';




const Main = (props) =>{
  const [html, setHtml] = useState("<div>Enter something here!</div>");
  const [index, setIndex] = useState(0);
  const [lastPara, setLastPara] = useState(undefined);
  const [paraLength, setParaLength] = useState([])
  const contentEditable = useRef(null);


  const handleChange = (e) =>{
    let text = e.target.value;
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
            console.log('delete last index')
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
          newParaLength[curIndex] = latestPara.length-1;
          setParaLength(newParaLength);
          console.log('current',latestPara.length-1)
          contentEditable.current.onkeydown = (e)=>callAPI(e)
        }else{
          
          for(let i=0;i < childrenDiv.length;i++){
            if((childrenDiv[i].innerText).length !== (paraLength[i])+1){
              console.log(typeof((childrenDiv[i].innerText).length) , typeof(paraLength[i]),((childrenDiv[i].innerText).length) , (paraLength[i]),'in loop',childrenDiv[i])

                let newParaLength = paraLength;
                newParaLength[i] = (childrenDiv[i].innerText).length;
                setParaLength(newParaLength);
                // console.log((childrenDiv[i].innerText).length,'innerloop',paraLength[i]);
                // contentEditable.current.onkeydown = (e)=>callAPI(e)
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
      setHtml(text)
      console.log(paraLength)
  }
  const callAPI = (e) =>{
    // console.log(e.which)
    if(e.which === 13 || e.which === 190 || e.which === 32){
     console.log('api get called')
    }
  }
  return(
    <div className="Editor">
            <h2>Dhad Editor</h2>
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
import React,{Component,useState,useRef} from 'react'
import {connect} from 'react-redux';
import {dataListHandler} from '../action';
import ContentEditable from 'react-contenteditable';

// const Main = (props) =>{
//     let index = 0;
//     let segment = {};


//     const segmentingEnteredText = (text) => {

//             }

//     const callAPI = (text) =>{
//         // console.log("API get called!",text)
//     }
//     const eventTest = (e) =>{
//         let text = e.currentTarget.textContent
//         // if(e.which === 13){
//         //     console.log(e.which,e.currentTarget.textContent);
//         //     // segmentingEnteredText(e.currentTarget.textContent+'.')
//         // }
//         // console.log(e.which)
//         let sentences = text.split('.');
//         let lastChar = text.charCodeAt(text.length -1);
//         let lastSentence = {};
//         console.log(sentences.length)
//         if(((lastChar === 46 )&& (sentences.length) -2 === index) || e.which === 13){
//             //this condition enter new value in segment obj if . enter
//             if(e.which === 13){
//                 let latestSentence = {}
//                 latestSentence[index] = sentences[sentences.length-1];
//                 if(lastChar !== 46){
//                     console.log('yes')
//                 }else{
//                     console.log("no")
//                 }

//                 Object.assign(segment,latestSentence);
//                 console.log(index)
//                 index++;
//                 console.log(index);
//             }else{
//                 lastSentence[index] = sentences[(sentences.length)-2];
//                 Object.assign(segment,lastSentence)
//                 callAPI(lastSentence[index])
//                 index++;
//             }
            
//         }else if((sentences.length)-1 === index){
//             //adding text to existing sentence
//             let latestSentence = Object.keys(segment).length-1;
//             if(segment[latestSentence] !== sentences[sentences.length-1]){
//                 //this condition will enter text to last element of segment
//                 lastSentence[index] = sentences[sentences.length-1];
//                 Object.assign(segment,lastSentence);
//                 let hitSpace = text.charCodeAt(text.length -1);
//                 if(hitSpace === 160){
//                     callAPI(lastSentence[index])
//                 }
//             }else{
//                 //this condition handle if someone change previous sentences
                // for(let i=0;i < sentences.length;i++){
                //     if(segment[i] !== sentences[i]){
                //         segment[i] =sentences[i];
                //         callAPI(lastSentence[index])
                //     }
                // }
//             }
            
//         }
//         // else if(e.which === 13){
//         //     console.log("enter");
//         // }
//         else{
//             //this condition handles if someone removing text from sentences
//             lastSentence[sentences.length-1] = sentences[sentences.length-1];
//             Object.assign(segment,lastSentence);
//             delete segment[index]; 
//             index--;
//         }
//         console.log(segment)

//     }
//     return (
//         <div className="Editor">
//             <h2>Dhad Editor</h2>
//             <div 
//                 contentEditable={true} 
//                 suppressContentEditableWarning={true} 
//                 spellCheck="false" 
//                 className="dhad_editor"
//                 // onInput={(e)=>segmentingEnteredText(e.currentTarget.textContent)}
//                 // onBlur={(e)=>dataListPass(e.currentTarget)}
//                 onKeyPress={eventTest}
//             >
//                 Please write something
//             </div>
//             <button onClick={()=>segmentingEnteredText()}>submit</button>
//         </div>
//     )
// }

// class Main extends React.Component {
//     constructor() {
//       super();
//       this.state = { 
//         html: "<div>Enter something here!</div>",
//         index:0,
//         APIPara:undefined,
//         lastPara:undefined
//       };
//       this.contentEditable = React.createRef();
//       this.index=0;
//     }
  
//     handleChange = evt => {
      // let text = evt.target.value;
      // let childrenDiv = this.contentEditable.current.children;
      // let curIndex = childrenDiv.length-1;
      // let latestPara = childrenDiv[curIndex].innerText;
      // console.log(childrenDiv,curIndex,this.state.index)
//       if(curIndex !== this.state.index){
//         // console.log('not matched',this.index,curIndex)
//         // this.index=curIndex;
//         // this.setState({index:curIndex},()=>{
//         //   console.log(this.index)
//         // })
      // }else if(curIndex === this.state.index ){
      //   console.log('matched',curIndex)
      //   if(latestPara.length === (this.lastPara && this.lastPara.length)){
      //     this.setState({lastPara:latestPara})
      //   }else{
      //     console.log('another para',curIndex , this.state.index )
      //   }
      //   // console.log(childrenDiv[index].innerText,(latestPara).length,(this.state.APIPara))
      //   // if(latestPara.length === (this.state.APIPara && this.state.APIPara.length)){
      //   //   // console.log(latestPara,"chagned another para",this.state.APIPara)
      //   //   console.log('changed')
      //   //   this.getPara(null,latestPara);
      //   //   this.setState({APIPara:latestPara})
      //   // }else{
      //   //   console.log("another para")
      //   // }
      // }
      
//       // this.setState({ html: evt.target.value });
//     };
//     getPara = (e=null,index) =>{
//       console.log('para',index)
//     }
//     handleEnter = (e) =>{
//       if(e.which === 13){
//       console.log(e.which)

//         // this.setState({index:this.state.index+1})
//       }
//     }
//     render = () => {
//       return (
//         <div className="Editor">
//             <h2>Dhad Editor</h2>
//             <ContentEditable
//                 innerRef={this.contentEditable}
//                 html={this.state.html} // innerHTML of the editable div
//                 disabled={false} // use true to disable edition
//                 onChange={this.handleChange} // handle innerHTML change
//                 className="dhad_editor"
//                 onKeyDown={this.handleEnter}
//             />
//             <button onClick={()=>dataListPass()}>submit</button>
//         </div>
        
//       );
//     };
//   }


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
      let latestPara = childrenDiv[curIndex].innerText;
      // console.log(contentEditable.current.children,'parent')
      let previousPara = null;
      if(curIndex === 0){
        previousPara = childrenDiv[curIndex].innerText;
      }else{
        previousPara = childrenDiv[childrenDiv.length-2].innerText;
      }
      if(curIndex !== index){
        if(childrenDiv.length < paraLength.length){
            console.log('delete last index')
        }else{
          if(childrenDiv[curIndex] !== "<br>"){
        console.log("index inc",childrenDiv,paraLength.length)

            setIndex(curIndex);
          }
          
          
          if(paraLength.length === 0){
            setParaLength([...paraLength,previousPara.length])
          }
        }
        
        
      }else if(curIndex === index ){
        if(latestPara.length !== (lastPara && lastPara.length)){
          setLastPara(latestPara);
          let newParaLength = paraLength;
          newParaLength[curIndex] = latestPara.length-1;
          setParaLength(newParaLength);
          console.log(latestPara,curIndex , index,'current',latestPara.length-1)
        }else{
          // console.log('forloop',paraLength)
          
          for(let i=0;i < childrenDiv.length;i++){
            if((childrenDiv[i].innerText).length !== paraLength[i]){
                let newParaLength = paraLength;
                newParaLength[i] = (childrenDiv[i].innerText).length;
                setParaLength(newParaLength);
                // console.log((childrenDiv[i].innerText).length,'innerloop',paraLength[i]);
                console.log('in loop')
                // if(childrenDiv.length < paraLength.length){
                //   console.log('delete last ')
                // }
            }
            // console.log((childrenDiv[i].innerText).length,childrenDiv[i].innerText,'in for',paraLength[i])
            if(childrenDiv[i].innerHTML === "<br>"){
              console.log("got empty div",i)
              // let newParaLength = paraLength;
              // newParaLength.splice((i+1),1)
              // setParaLength(newParaLength)
              // delete paraLength[i]; 
            }
          }
        }

      }
      setHtml(text)
      console.log(paraLength)
  }
  return(
    <div className="Editor">
            <h2>Dhad Editor</h2>
            <ContentEditable
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

// let sentences = text.split('</div>');
      
      // console.log(text.getElementsByTagName("div").length)
// latestPara.setAttribute('contenteditable', 'true');
      // if(this.index < index){
      //   // latestPara.appendChild(document.createElement("br"));
      //   this.index++;
      // }
      // latestPara.onchange = ()=>{this.getPara('called')}
      // latestPara.setAttribute('id', index);
      // latestPara.id = index
      // onmousemove
      // this.contentEditable.current.onkeydown = (e) => {this.getPara(e,index)}
      // latestPara.onkeydown = () => {this.getPara(null,index)}
      // latestPara.onkeydown = () => {console.log('enterkfjsdk')}
      // console.log(latestPara.onkeydown = console.log(index))
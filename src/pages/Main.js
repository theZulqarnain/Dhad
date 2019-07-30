import React,{Component} from 'react'
import {connect} from 'react-redux';
import {dataListHandler} from '../action';

const Main = (props) =>{
    let index = 0;
    let segment = {};
    let oldText = '';

    const dataListPass = (e) =>{
        
        segmentingEnterdText(e)
    }
    const segmentingEnterdText = (text) => {
        if(text === oldText) return;
        
        
        let sentence = text.split('.');;
        let lastChar = text.charCodeAt(text.length -1);
        let lastSentence = {};
        console.log(sentence,text);

        
        if(lastChar === 46 && (sentence.length) -2 === index){
            lastSentence[index] = sentence[(sentence.length)-2];
            Object.assign(segment,lastSentence)
            index++;
        }else{
            if((sentence.length)-1 === index){
                lastSentence[index] = sentence[sentence.length-1];
                Object.assign(segment,lastSentence)
            }else{
                lastSentence[sentence.length-1] = sentence[sentence.length-1];
                Object.assign(segment,lastSentence);
                delete segment[index]; 
                index--;
            }
            
        }
        console.log(segment)
        
    }
    
    return (
        <div className="Editor">
            <h2>Dhad Editor</h2>
            <div 
                contentEditable={true} 
                suppressContentEditableWarning={true} 
                spellCheck="false" 
                className="dhad_editor"
                onInput={(e)=>dataListPass(e.currentTarget.textContent)}
                // onBlur={(e)=>dataListPass(e.currentTarget)}
            >
                Please write something
            </div>
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
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
        let sentences = text.split('.');
        let lastChar = text.charCodeAt(text.length -1);
        let lastSentence = {};
        if((lastChar === 46  )&& (sentences.length) -2 === index){
            //this condition enter new value in segment obj if . enter
            lastSentence[index] = sentences[(sentences.length)-2];
            Object.assign(segment,lastSentence)
            callAPI(lastSentence[index])
            index++;
        }else if((sentences.length)-1 === index){
            //adding text to existing sentence
            let latestSentence = Object.keys(segment).length-1;
            if(segment[latestSentence] !== sentences[sentences.length-1]){
                //this condition will enter text to last element of segment
                lastSentence[index] = sentences[sentences.length-1];
                Object.assign(segment,lastSentence);
                let hitSpace = text.charCodeAt(text.length -1);
                if(hitSpace === 160){
                    callAPI(lastSentence[index])
                }
            }else{
                //this condition handle if someone change previous sentences
                for(let i=0;i < sentences.length;i++){
                    if(segment[i] !== sentences[i]){
                        segment[i] =sentences[i];
                        callAPI(lastSentence[index])
                    }
                }
            }
            
        }
        else{
            //this condition handles if someone removing text from sentences
            lastSentence[sentences.length-1] = sentences[sentences.length-1];
            Object.assign(segment,lastSentence);
            delete segment[index]; 
            index--;
        }
        console.log(segment)
    }

    const callAPI = (text) =>{
        console.log("API get called!",text)
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
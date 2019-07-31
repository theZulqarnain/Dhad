import React,{Component} from 'react'
import {connect} from 'react-redux';
import {dataListHandler} from '../action';

const Main = (props) =>{
    let index = 0;
    let segment = {};


    const segmentingEnteredText = (text) => {

            }

    const callAPI = (text) =>{
        // console.log("API get called!",text)
    }
    const eventTest = (e) =>{
        let text = e.currentTarget.textContent
        // if(e.which === 13){
        //     console.log(e.which,e.currentTarget.textContent);
        //     // segmentingEnteredText(e.currentTarget.textContent+'.')
        // }
        // console.log(e.which)
        let sentences = text.split('.');
        let lastChar = text.charCodeAt(text.length -1);
        let lastSentence = {};
        console.log(sentences.length)
        if(((lastChar === 46 )&& (sentences.length) -2 === index) || e.which === 13){
            //this condition enter new value in segment obj if . enter
            if(e.which === 13){
                let latestSentence = {}
                latestSentence[index] = sentences[sentences.length-1];
                if(lastChar !== 46){
                    console.log('yes')
                }else{
                    console.log("no")
                }

                Object.assign(segment,latestSentence);
                console.log(index)
                index++;
                console.log(index);
            }else{
                lastSentence[index] = sentences[(sentences.length)-2];
                Object.assign(segment,lastSentence)
                callAPI(lastSentence[index])
                index++;
            }
            
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
        // else if(e.which === 13){
        //     console.log("enter");
        // }
        else{
            //this condition handles if someone removing text from sentences
            lastSentence[sentences.length-1] = sentences[sentences.length-1];
            Object.assign(segment,lastSentence);
            delete segment[index]; 
            index--;
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
                // onInput={(e)=>segmentingEnteredText(e.currentTarget.textContent)}
                // onBlur={(e)=>dataListPass(e.currentTarget)}
                onKeyPress={eventTest}
            >
                Please write something
            </div>
            <button onClick={()=>segmentingEnteredText()}>submit</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        DataList:state.MainReducer.data_list
    }
}
export default connect(mapStateToProps,{dataListHandler})(Main);
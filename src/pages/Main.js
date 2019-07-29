import React,{Component} from 'react'
import {connect} from 'react-redux';
import {dataListHandler} from '../action';

const Main = (props) =>{
    const dataListPass = (e) =>{
        console.log(e);
        // props.dataListHandler(['third','fourth'])
        let lastChar = e.charCodeAt(e.length -1);
        if(lastChar === 46){
            console.log(lastChar,"we end this sentence");
        }
        // console.log(e.charCodeAt(e.length -1))
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
                onBlur={(e)=>dataListPass(e.currentTarget)}
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
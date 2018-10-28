import React, { Component , Fragment  } from 'react';
import { connect } from 'react-redux';

class HighlightedWrongWords  extends Component {
	constructor(props) {
		super(props);
		this.getSuggestedWords = this.getSuggestedWords.bind(this);
	 
	}
	// get  an an array of list of sugessted words 
    getSuggestedWords  = (obj,  list , decoratedWord) => {
			obj = this.props.correctionsList ;
			decoratedWord = this.props.decoratedText ; 
			list = [] ;
		let objToArr = Object.keys(obj);
		objToArr.forEach(e1 => {
		if (e1 === decoratedWord) {
			list.push(obj[e1]);
		}
		});
		return list;
    };
		

render(){
    var suggestedWords  = this.getSuggestedWords(); 
    return(
    <Fragment>
        <span id="error-01" data-dh-id="1"  ref="words" className="dh_sp_error" >
            {this.props.children}
			<span className="sugg_dropdown" ref="suggDropdown">
				<span class="sugg_list_words">
				  {	
				    suggestedWords.map(e => <ul>{e.map(word => <a> {word} </a>)}</ul>)
				  }
			   </span>
			<span class="sugg_option">
					<a href="#" class="btn_dictionary">أضافة للقاموس</a>
					<a href="#" class="btn_delete">حذف</a>
					<a href="#" class="btn_more" onClick="showAssistant();">تفصيل أكثر</a>
			</span>		
		    </span>
        </span>
    </Fragment>
    ); 

 }
 


}   
const mapStateToProps = state => {
	return {
		errorWordslist: state.edi.errorWordslist,
		correctionsList: state.edi.correctionsList
	};
  };	

export default connect( mapStateToProps ) ( HighlightedWrongWords )  ; 

  
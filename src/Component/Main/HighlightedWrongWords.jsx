import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { showAssistant } from '../Header/Header';

class HighlightedWrongWords extends Component {
    constructor(props) {
        super(props);
        this.getSuggestedWords = this.getSuggestedWords.bind(this);

    }
    // get  an an array of list of sugessted words 
    getSuggestedWords = (decoratedWord , list = [] ) => {
         const obj = this.props.correctionsList ? this.props.correctionsList : {};
       // decoratedWord = this.props.decoratedText;
		//list = [];
        let objToArr = Object.keys(obj);
        objToArr.forEach(e1 => {
            if (e1 === decoratedWord) {
                list.push(obj[e1]);
            }
		});
        return list;
	};
	
	test = (word) => {
		console.log('word' , word);
		console.log(this.refs.dummy);
	}
render() {

    var threeSuggesteddLists = this.getSuggestedWords(this.props.decoratedText).map(e => <ul>{e.slice(0, 3).map(word => <a onClick={()=>this.test(word)} ref='dummy'> {word} </a>)}</ul>);
    
    var listALlWrongWords =  this.props.errorWordslist ? this.props.errorWordslist.map( w => 

            <div className="accordionItemContent">
            <p className="acc_con_word_error">{w}</p>
                {
            this.getSuggestedWords(w).map(e => 
                <nav className="acc_sugg_words">
                   {e.map(word => <a 
                   href="javascript:ReplaceContentInContainer('error-01','أكتب');"
                   data-tooltip="أنقر لتصحيح الخطاء الإملائي"
                   data-tooltip-top
                   onClick={()=>this.test(word)} 
                    ref='dummy'> {word} </a>)}
                    </nav>
            )     
                    
                }
            <div className="acc_con_text_wrap width_9">
                <p className="acc_con_text">
                    هذة الكلمة <b>{w}</b> ليست في قاموسنا. إذا كنت متأكدا من صحة هذا
                    الإملاء، فيمكنك إضافته إلى قاموسك الشخصي لمنع التنبيهات
                    المستقبلية.
                    </p>
            </div>
            <nav className="acc_left_option">
                <a
                    href="javascript:void(0);"
                    className="btn_delete"
                    data-tooltip="حذف"
                    data-tooltip-right
                />
                <a
                    href="javascript:void(0);"
                    className="btn_dictionary"
                    data-tooltip="إضافة للقاموس"
                    data-tooltip-right
                />
                <div className="btn_feedback_wrap">
                    <span className="btn_feedback" />
                    <div className="acc_dropdown_feedback">
                        <a href="javascript:void(0);">مقترح غير صحيح</a>
                        <a href="javascript:void(0);">محتوى غير لائق</a>
                    </div>
                </div>
            </nav>
        </div>

        )  : null ;
            
    return (
        <Fragment>
            <span id="error-01" data-dh-id="1" ref="words"  className="dh_sp_error" >
                <label onClick={ () => this.test('deco') }>
                    {this.props.children}
                </label>
                <span className="sugg_dropdown" >
                    <span class="sugg_list_words">
                        {
                            threeSuggesteddLists
                        }
                    </span>
                    <span class="sugg_option">
                        <a href="#" class="btn_dictionary">أضافة للقاموس</a>
                        <a href="#" class="btn_delete">حذف</a>
                        <a href="#" class="btn_more" onClick={showAssistant}>تفصيل أكثر</a>
                    </span>
                </span>
            </span>

            <section id="spell-wrap" className="tabcontent">
                <header className="title f_r">
                    <h2 className="f_r">التدقيق الإملائي</h2>
                    <p className="f_l">
                        <span>55</span>
                        <a
                            href="#"
                            className="btn_delete"
                            data-tooltip="حذف الكل"
                            data-tooltip-top
                        />
                    </p>
                </header>
                <article data-simplebar="init" className="accordian_wrap" ss-container="true">
                    <p className="paragraph f_r">تصحيح الأخطاء الإملائية والأخطاء المطبعية</p>
                    <div id="spell-wrapper">
                        <div className="accordionItem open">
                            <h2 className="accordionItemHeading">
                                <span className="acc_word_error">اكتي</span>
                                <span className="acc_point">.</span>
                                <span className="acc-ww-error">تصحيح إملائي</span>
                                <span className="acc_more_v" />
                            </h2>
                            {listALlWrongWords}
                    </div>
                    </div>
                </article>
            </section>
        </Fragment>
    );

}
}

const mapStateToProps = state => {
    return {
        errorWordslist: state.checkReducer.errorWordslist,
        correctionsList: state.checkReducer.correctionsList
    };
};

export default connect(mapStateToProps)(HighlightedWrongWords);


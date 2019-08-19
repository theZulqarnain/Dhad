import React, { useState, Fragment } from 'react';
import '../../../index.css';

const model = (props) => {

    return (
        <Fragment>
            <div id="plagiarism-model" className="coming_soon_box">
          <h4><i className="la la-quote-right" /> الانتحال الأدبي</h4>
          <p>
            هِيَ خِدْمَةٌ تَخْتَصُّ بِكَشْفِ وَتَمْيِيزِ الانْتِحَالِ للنُّصُوصِ العِلْمِيَّةِ على مُسْتَوى التَّألِيفِ وَالبُحُوثِ العِلْمِيَّةِ وَغَيرِها.
          </p>
          <div className="coming_mail_wrap">
            <input type="text" placeholder="اكتب بريدك الإلكتروني للأشتراك" />
            <button id="plagiarism-mail-btn"  className="has-spinner">أعلمني<i className="la la-spin" /></button>
          </div>
        </div>
        </Fragment>
    );
}

export default model; 
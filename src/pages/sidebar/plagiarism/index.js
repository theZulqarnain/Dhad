import React, { useState, Fragment } from 'react';
import '../../../index.css';
import "../../../../node_modules/line-awesome/css/line-awesome.css" ;
import Model from './model';
import { FaQuoteRight } from "react-icons/fa";

const Plagiarism = (props) => {

    return (
        <Fragment>
            <li>
                <a href="javascript:void(0);"  data-tooltip="الانتحال الأدبي"  data-tooltip-right> 
                <FaQuoteRight />
                </a>
                
               
           <Model />
            </li>

        </Fragment>
    );
}

export default  Plagiarism ; 
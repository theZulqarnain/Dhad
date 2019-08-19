import React, { useState, Fragment } from 'react';
import '../../../index.css';
import "../../../../node_modules/line-awesome/css/line-awesome.css" ;


import { FaQuoteRight } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
const ArabicTeachers = (props) => {

    return (
        <Fragment>
            <li>
                <a href="javascript:void(0);"  data-tooltip="أساتذة لغة عربية"  data-tooltip-right> 
                    <MdPeople />
                </a>
          
            </li>
        </Fragment>
    );
}

export default  ArabicTeachers ; 
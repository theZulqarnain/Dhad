import {DATALIST ,  OPEN_SIDEBAR  , DARK_THEME } from '../constants' ;

export function dataListHandler(value){
    return function(dispatch){
        dispatch({type:DATALIST,payload:value})
    }
}

export function openSidebarHandler(value){
    return function(dispatch){
        dispatch({type:OPEN_SIDEBAR ,payload: value })
    }
}

export function darkThemeHandler(value){
    return function(dispatch){
        dispatch({type: DARK_THEME ,payload: value })
    }
}

import React from 'react';
import { useDispatch } from 'react-redux';
import {sideBarToggleHandler } from '../Action'; 
import removerCss from '../cssModules/Sidebar.module.css';

const CloseSideBar = () => {
    const dispatch = useDispatch();
    return (
        <span onClick={() => dispatch(sideBarToggleHandler(false))} className = {removerCss.remover} >x</span>
    )
}

export default CloseSideBar;
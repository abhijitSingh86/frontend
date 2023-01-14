import React from 'react'
import {Model} from './model/model'
import {Filee} from './file/File'
import style from './canvas.module.scss'
import { Outlet, Link } from "react-router-dom";
export function Canvas(props){
    return <div className={style.area}>
    <Link to="/someInvalid"> Click to go to invalid</Link>
    <Link to="/success"> Click to go to invalid</Link>
    <br/>
    <Link to="/file"> For File</Link>
    <Filee />
        <Model data='{"layer":1, "data":"some more info.", "description": "It is a very important data sheet"}'/>
    </div>;
}
import React from 'react'
import style from './model.module.scss'

export function Model(props){
    const js = JSON.parse(props.data)
    return <div>
        <div className={style.component}> {js.data}
        <div className={style.description}> {js.description}</div>
        </div>
    </div>;
}
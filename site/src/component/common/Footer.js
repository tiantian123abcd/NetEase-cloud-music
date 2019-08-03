import React from 'react'
import { NavLink } from 'react-router-dom'
import router from '../../router'
export default class Footer extends React.Component{
    render() {
        return(
            <div className={'footer'}>
                {
                 router.map((v,i)=>{
                     return (
                         <NavLink className={'App-link'} activeStyle={{className:'Active-link'}} key={i} exact={v.exact} to={v.to} >{v.content}</NavLink>
                     )
                 })
                }
            </div>
        )
    }

}
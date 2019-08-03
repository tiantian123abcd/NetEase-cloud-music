import React from 'react'
import router from '../../router'
import { Route } from 'react-router-dom'
import GuardRouter from "../../router/GuardRouter";
export default class Main extends React.Component{
    render() {
        return (
            <div className={'main'}>
                {
                    router.map((v,i)=>{
                        return (
                            <Route key={i} exact={v.exact} path={v.path} render={()=><GuardRouter {...v}/>} />
                        )
                    })
                }
            </div>
        );
    }
}
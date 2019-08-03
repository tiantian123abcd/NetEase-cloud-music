import React ,{ Component } from 'react'
import { withRouter } from 'react-router-dom'

 class GuardRouter extends Component{
    render() {
        return (
            <this.props.component/>
        )
    }
}
export default withRouter(GuardRouter)
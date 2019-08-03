import React, {Component} from 'react';
import Header from "./component/common/Header";
import Main from "./component/common/Main";
import Footer from "./component/common/Footer";
import { BrowserRouter as Router } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import discoverCreator from './store/actionCreator/discover'

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <Router>
                    <Header/>
                    <Main/>
                    <Footer/>
                </Router>
            </div>
        )
    }
}
export default connect((state) => ({imgCollect: state.imgCollect}), dispatch => bindActionCreators(discoverCreator, dispatch))(App)





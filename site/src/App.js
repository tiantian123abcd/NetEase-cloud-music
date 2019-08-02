import React,{ Component } from 'react';
import Header from "./component/common/Header";
import Main from "./component/common/Main";
import Footer from "./component/common/Footer";
export default class App extends Component{
        render() {
          return(
              <div className={'App'}>
                <Header/>
                <Main/>
                <Footer/>
              </div>
          )
        }
        async componentDidMount() {
           const data = await this.$ajax.get('/login/cellphone?phone=18842493916&password=suzhongbao0.00')
            console.log(data)
        }
}





import React,{ Component } from 'react';

import './App.css';

export default class App extends Component{
        render() {
          return(
              <div>
                网易云音乐
              </div>
          )
        }
        async componentDidMount() {
           const data = await this.$ajax.get('/login/cellphone?phone=18842493916&password=suzhongbao0.00')
            console.log(data)
        }
}





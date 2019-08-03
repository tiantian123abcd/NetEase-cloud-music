import React from 'react'

import 'swiper/dist/js/swiper.min'
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
class Loop extends React.Component {
    constructor(props){
        super(props)
        this.state={
            imgCollect:[]
        }
    }
    render() {
        console.log(this.state.imgCollect)

        return (
            <div className={'loop'}>
                <div className={'swiper-container'}>
                    <div className={'swiper-wrapper'}>
                        {
                            this.state.imgCollect.map((v,i)=>{
                                return(
                                    <div key={v.targetId } className={'swiper-slide'} >
                                        <img src={v.imageUrl} alt=""/>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <div className={'swiper-pagination'}></div>
            </div>
        )
    }

    async componentDidMount() {
        new Swiper('.swiper-container',{
            loop:true,
            autoplay:true,
            pagination:'.swiper-pagination'
        })
        const data = await this.$ajax.get('/banner')
        console.log(data)
        this.setState({
            imgCollect:data.banners
        })
    }
}
export default Loop
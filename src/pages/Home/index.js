import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Header } from '../../components'

const Home = () => {
    const [dataCaurosel, setDataCaurosel] = useState([
        {
            id: 1,
            img: 'https://puui.qpic.cn/tv/0/1234990632_1680580/0'
        },
        {
            id: 2,
            img: 'https://puui.qpic.cn/tv/0/1234809573_1680580/0'
        },
        {
            id: 3,
            img: 'https://puui.qpic.cn/tv/0/1234965411_1680580/0'
        },
        {
            id: 4,
            img: 'https://puui.qpic.cn/tv/0/1234197243_1680580/0'
        },
        {
            id: 5,
            img: 'https://puui.qpic.cn/tv/0/1234997943_1680580/0'
        }
    ])
    const [dataMenu, setDataMenu] = useState([
        {
            id: 1,
            name: 'Semua'
        },
        {
            id: 2,
            name: 'Serial TV'
        },
        {
            id: 3,
            name: 'Hiburan'
        },
        {
            id: 4,
            name: 'Anime'
        },
        {
            id: 5,
            name: 'Flim'
        }
    ])
    return (
        <div className="home">
            <Header />
            <div className="home-wrapper-caurosel">
                <Carousel autoPlay={true} interval={3000} showThumbs={false} showStatus={false}>
                    { dataCaurosel.map((item) => 
                        <div key={item.id}>
                            <img src={item.img} />
                        </div>
                    ) }
                </Carousel>
            </div>
            <div className="home-menu">
                { dataMenu.map((item) => 
                    <div className={item.name === 'Semua' ? "home-menu-item home-menu-item-active" : "home-menu-item"} key={item.id}>
                        <p className={item.name === 'Semua' ? "home-menu-item-text home-menu-item-text-active" : "home-menu-item-text"} >{item.name}</p>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Home

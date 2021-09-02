import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Header, Footer } from '../../components'

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
    const [dataMovie, setDataMovie] = useState([
        {
            id: 1,
            name: 'Serial TV',
            data: [
                {
                    id: 1,
                    name: 'Laskar Pelangi',
                    img: 'https://images.tokopedia.net/img/cache/700/product-1/2020/7/20/batch-upload/batch-upload_e2df3241-afc4-41e4-b1a3-b4263b2d05e9.jpeg'
                },
                {
                    id: 2,
                    name: 'Cek Toko Sebelah',
                    img: 'https://s3.bukalapak.com/img/3805575796/large/index6.jpg'
                },
                {
                    id: 3,
                    name: 'Warkop DKI Reborn',
                    img: 'https://awsimages.detik.net.id/community/media/visual/2016/08/02/05ec4ce6-6a37-49a2-9910-33722bd206a4.jpg?w=650&q=90'
                },
                {
                    id: 4,
                    name: 'Mariposa',
                    img: 'https://assets.jalantikus.com/assets/cache/0/0/userfiles/2020/09/15/poster-film-indonesia-terbaru-55755.jpg'
                },
                {
                    id: 5,
                    name: 'Dilan 1990',
                    img: 'https://s2.bukalapak.com/img/7057854092/large/poster_film_dilan.jpeg'
                },
                {
                    id: 6,
                    name: 'Bucin',
                    img: 'https://pbs.twimg.com/media/ERsp6V1VUAAgkJp.jpg'
                },
                {
                    id: 7,
                    name: 'Hit & Run',
                    img: 'https://disk.mediaindonesia.com/thumbs/1800x1200/news/2019/04/f4346585deae4a603386b3967ecdbdd6.jpg'
                }
            ]
        },
        {
            id: 2,
            name: 'Hiburan',
            data: [
                {
                    id: 1,
                    name: 'Laskar Pelangi',
                    img: 'https://images.tokopedia.net/img/cache/700/product-1/2020/7/20/batch-upload/batch-upload_e2df3241-afc4-41e4-b1a3-b4263b2d05e9.jpeg'
                },
                {
                    id: 2,
                    name: 'Cek Toko Sebelah',
                    img: 'https://s3.bukalapak.com/img/3805575796/large/index6.jpg'
                },
                {
                    id: 3,
                    name: 'Warkop DKI Reborn',
                    img: 'https://awsimages.detik.net.id/community/media/visual/2016/08/02/05ec4ce6-6a37-49a2-9910-33722bd206a4.jpg?w=650&q=90'
                },
                {
                    id: 4,
                    name: 'Mariposa',
                    img: 'https://assets.jalantikus.com/assets/cache/0/0/userfiles/2020/09/15/poster-film-indonesia-terbaru-55755.jpg'
                },
                {
                    id: 5,
                    name: 'Dilan 1990',
                    img: 'https://s2.bukalapak.com/img/7057854092/large/poster_film_dilan.jpeg'
                },
                {
                    id: 6,
                    name: 'Bucin',
                    img: 'https://pbs.twimg.com/media/ERsp6V1VUAAgkJp.jpg'
                },
                {
                    id: 7,
                    name: 'Hit & Run',
                    img: 'https://disk.mediaindonesia.com/thumbs/1800x1200/news/2019/04/f4346585deae4a603386b3967ecdbdd6.jpg'
                }
            ]
        },
        {
            id: 3,
            name: 'Anime',
            data: [
                {
                    id: 1,
                    name: 'Laskar Pelangi',
                    img: 'https://images.tokopedia.net/img/cache/700/product-1/2020/7/20/batch-upload/batch-upload_e2df3241-afc4-41e4-b1a3-b4263b2d05e9.jpeg'
                },
                {
                    id: 2,
                    name: 'Cek Toko Sebelah',
                    img: 'https://s3.bukalapak.com/img/3805575796/large/index6.jpg'
                },
                {
                    id: 3,
                    name: 'Warkop DKI Reborn',
                    img: 'https://awsimages.detik.net.id/community/media/visual/2016/08/02/05ec4ce6-6a37-49a2-9910-33722bd206a4.jpg?w=650&q=90'
                },
                {
                    id: 4,
                    name: 'Mariposa',
                    img: 'https://assets.jalantikus.com/assets/cache/0/0/userfiles/2020/09/15/poster-film-indonesia-terbaru-55755.jpg'
                },
                {
                    id: 5,
                    name: 'Dilan 1990',
                    img: 'https://s2.bukalapak.com/img/7057854092/large/poster_film_dilan.jpeg'
                },
                {
                    id: 6,
                    name: 'Bucin',
                    img: 'https://pbs.twimg.com/media/ERsp6V1VUAAgkJp.jpg'
                },
                {
                    id: 7,
                    name: 'Hit & Run',
                    img: 'https://disk.mediaindonesia.com/thumbs/1800x1200/news/2019/04/f4346585deae4a603386b3967ecdbdd6.jpg'
                }
            ]
        },
        {
            id: 4,
            name: 'Film',
            data: [
                {
                    id: 1,
                    name: 'Laskar Pelangi',
                    img: 'https://images.tokopedia.net/img/cache/700/product-1/2020/7/20/batch-upload/batch-upload_e2df3241-afc4-41e4-b1a3-b4263b2d05e9.jpeg'
                },
                {
                    id: 2,
                    name: 'Cek Toko Sebelah',
                    img: 'https://s3.bukalapak.com/img/3805575796/large/index6.jpg'
                },
                {
                    id: 3,
                    name: 'Warkop DKI Reborn',
                    img: 'https://awsimages.detik.net.id/community/media/visual/2016/08/02/05ec4ce6-6a37-49a2-9910-33722bd206a4.jpg?w=650&q=90'
                },
                {
                    id: 4,
                    name: 'Mariposa',
                    img: 'https://assets.jalantikus.com/assets/cache/0/0/userfiles/2020/09/15/poster-film-indonesia-terbaru-55755.jpg'
                },
                {
                    id: 5,
                    name: 'Dilan 1990',
                    img: 'https://s2.bukalapak.com/img/7057854092/large/poster_film_dilan.jpeg'
                },
                {
                    id: 6,
                    name: 'Bucin',
                    img: 'https://pbs.twimg.com/media/ERsp6V1VUAAgkJp.jpg'
                },
                {
                    id: 7,
                    name: 'Hit & Run',
                    img: 'https://disk.mediaindonesia.com/thumbs/1800x1200/news/2019/04/f4346585deae4a603386b3967ecdbdd6.jpg'
                }
            ]
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
            <div className="home-main">
                { dataMovie.map((item) => 
                    <div className="home-main-section" key={item.id}>
                        <p className="home-main-section-title">{item.name}</p>
                        <div className="home-main-section-content">
                            { item.data.map((itemDetail) => 
                                <div className="home-main-section-content-item" key={itemDetail.id}>
                                    <img className="home-main-section-content-item-img" src={itemDetail.img} />
                                    <p className="home-main-section-content-item-title">{itemDetail.name}</p>
                                </div>
                            ) }
                        </div>
                    </div>
                ) }
            </div>
            <Footer />
        </div>
    )
}

export default Home

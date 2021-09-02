import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ICStar, ICLike } from '../../assets';

import { Header, Footer } from '../../components';

const Detail = () => {
    const [dataMoviePopuler, setDataMoviePopuler] = useState([
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
        }
    ])
    return (
        <div className="detail">
            <Header />
            <div className="detail-video">
                <iframe 
                    width="100%" 
                    height="450px"
                    frameBorder="0" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen="allowfullscreen"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
            </div>
            <div className="detail-main">
                <div className="detail-main-left">
                    <div className="detail-main-left-header">
                        <img className="detail-main-left-header-img" src="https://images.tokopedia.net/img/cache/700/product-1/2020/7/20/batch-upload/batch-upload_e2df3241-afc4-41e4-b1a3-b4263b2d05e9.jpeg" />
                        <div className="detail-main-left-header-content">
                            <p className="detail-main-left-header-content-title">Cek Toko Sebelah 2019</p>
                            <p className="detail-main-left-header-content-desc">Release: 1 July 2021</p>
                            <div className="detail-main-left-header-content-rating">
                                <img src={ICStar} className="detail-main-left-header-content-rating-img" />
                                <p className="detail-main-left-header-content-rating-text">7.8</p>
                            </div>
                            <div className="detail-main-left-header-content-favorite">
                                <p className="detail-main-left-header-content-favorite-text">Set Favorite</p>
                                <img src={ICLike} className="detail-main-left-header-content-rating-img" />
                            </div>
                        </div>
                    </div>                
                    <div className="detail-main-left-item">
                        <p className="detail-main-left-item-title">Status</p>
                        <p className="detail-main-left-item-desc">Released</p>
                    </div>
                    <div className="detail-main-left-item">
                        <p className="detail-main-left-item-title">Original Title</p>
                        <p className="detail-main-left-item-desc">Laskar Pelangi 2019</p>
                    </div>
                    <div className="detail-main-left-item">
                        <p className="detail-main-left-item-title">Genre</p>
                        <p className="detail-main-left-item-desc">Animation, Comedy, Adventure, Family.</p>
                    </div>
                    <div className="detail-main-left-item">
                        <p className="detail-main-left-item-title">Overview</p>
                        <p className="detail-main-left-item-desc">Laskar Pelangi (2008) adalah sebuah film garapan sutradara Riri Riza yang dirilis pada 26 September 2008. Film Laskar Pelangi merupakan karya adaptasi dari buku Laskar Pelangi yang ditulis oleh Andrea Hirata. Skenarionya ditulis oleh Salman Aristo yang juga menulis naskah film Ayat-Ayat Cinta dibantu oleh Riri Riza dan Mira Lesmana. Hingga Maret 2009, Laskar Pelangi telah ditonton oleh 4,6 juta orang,[1] menjadikannya film terbanyak ditonton di Indonesia keempat, setelah Jelangkung dengan 5,7 Juta, Pocong 2 dengan 5,1 Juta, dan Ada Apa Dengan Cinta dengan 4,9 Juta.</p>
                    </div>
                    <div className="detail-main-left-item">
                        <p className="detail-main-left-item-title">Production Companies</p>
                        <p className="detail-main-left-item-desc">Dream Works Animation</p>
                    </div>
                    <div className="detail-main-left-item">
                        <p className="detail-main-left-item-title">Production Countries</p>
                        <p className="detail-main-left-item-desc">Indonesia</p>
                    </div>
                </div>
                <div className="detail-main-right">
                    <p className="detail-main-right-title">Film Terpopuler</p>
                    { dataMoviePopuler.map((item) => 
                        <Link to="/detail" style={{ textDecoration: 'none' }}>
                            <div key={item.id} className="detail-main-right-item">
                                <img src={item.img} className="detail-main-right-item-img" />
                                <p className="detail-main-right-item-title">{item.name}</p>
                            </div>
                        </Link>
                    ) }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Detail

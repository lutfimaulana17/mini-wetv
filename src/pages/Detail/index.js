import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ICStar, ICLike } from '../../assets';
import { Header, Footer } from '../../components';

import { clearMoviePopular, requestMoviePopular, clearMovieDetail, requestMovieDetail } from '../../redux/actions/Movie';
import moment from 'moment';

const Detail = (props) => {
    const dispatch = useDispatch()
    const stateGlobal = useSelector(state => state)

    useEffect(() => {
        dispatch(requestMoviePopular())
        dispatch(requestMovieDetail(props.match.params.id))
        return () => {
            dispatch(clearMoviePopular())
            dispatch(clearMovieDetail())
        }
    }, [])

    const changeFormatDate = (date) => {
        return moment(date).format('LL')
    } 

    const { moviePopular, movieDetail } = stateGlobal.Movie;
    return (
        <div className="detail">
            <Header />
            <div className="detail-video">
            { movieDetail && Object.keys(movieDetail).length > 0 &&
                <img src={`https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}`} style={{ height: '450px', width: '100%', objectFit: 'cover' }}/>
            }
            </div>
            <div className="detail-main">
            { movieDetail && Object.keys(movieDetail).length > 0 &&
                <div className="detail-main-left">
                    <div className="detail-main-left-header">
                        <img className="detail-main-left-header-img" src={`https://image.tmdb.org/t/p/w200${movieDetail.poster_path}`} />  
                        <div className="detail-main-left-header-content">
                            <p className="detail-main-left-header-content-title">{movieDetail.title}</p>
                            <p className="detail-main-left-header-content-desc">Release: {changeFormatDate(movieDetail.release_date)}</p>
                            <div className="detail-main-left-header-content-rating">
                                <img src={ICStar} className="detail-main-left-header-content-rating-img" />
                                <p className="detail-main-left-header-content-rating-text">{movieDetail.vote_average}</p>
                            </div>
                            <div className="detail-main-left-header-content-favorite">
                                <p className="detail-main-left-header-content-favorite-text">Set Favorite</p>
                                <img src={ICLike} className="detail-main-left-header-content-rating-img" />
                            </div>
                        </div>
                    </div>                
                    <div className="detail-main-left-item">
                        <p className="detail-main-left-item-title" id="detail-status">Status</p>
                        <p className="detail-main-left-item-desc">{movieDetail.status}</p>
                    </div>
                    <div className="detail-main-left-item">
                        <p className="detail-main-left-item-title">Original Title</p>
                        <p className="detail-main-left-item-desc">{movieDetail.original_title}</p>
                    </div>
                    <div className="detail-main-left-item">
                        <p className="detail-main-left-item-title">Genre</p>
                        <p className="detail-main-left-item-desc">{movieDetail.genres.map((item) => item.name).join(",")}</p>
                    </div>
                    <div className="detail-main-left-item">
                        <p className="detail-main-left-item-title">Overview</p>
                        <p className="detail-main-left-item-desc">{movieDetail.overview}</p>
                    </div>
                    <div className="detail-main-left-item">
                        <p className="detail-main-left-item-title">Production Companies</p>
                        <p className="detail-main-left-item-desc">{movieDetail.production_companies.map((item) => item.name).join(",")}</p>
                    </div>
                    <div className="detail-main-left-item">
                        <p className="detail-main-left-item-title">Production Countries</p>
                        <p className="detail-main-left-item-desc">{movieDetail.production_countries.map((item) => item.name).join(",")}</p>
                    </div>
                </div>
            }
                <div className="detail-main-right">
                    <p className="detail-main-right-title">Film Terpopuler</p>
                    { moviePopular ?
                        moviePopular.results.length > 0 ?
                            moviePopular.results.slice(0, 4).map((item, index) =>
                                <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none' }} key={index}>
                                    <div className="detail-main-right-item">
                                        <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} className="detail-main-right-item-img" />
                                        <p className="detail-main-right-item-title">{item.title}</p>
                                    </div>
                                </Link>
                            )
                            : <p>No data!</p>
                        : <p>Loading...</p>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default withRouter(Detail)

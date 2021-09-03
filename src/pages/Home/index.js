import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Header, Footer, ItemMovie } from '../../components'
import { clearMovieLatest, clearMovieNowPlaying, clearMoviePopular, clearMovieTopRated, requestMovieLatest, requestMovieNowPlaying, requestMoviePopular, requestMovieTopRated, requestMovieUpcoming, clearMovieUpcoming } from '../../redux/actions/Movie';


const Home = () => {
    const dispatch = useDispatch()
    const stateGlobal = useSelector(state => state)

    const [dataMenu, setDataMenu] = useState([
        {
            id: 1,
            name: 'Semua'
        },
        {
            id: 2,
            name: 'Now Playing'
        },
        {
            id: 3,
            name: 'Popular'
        },
        {
            id: 4,
            name: 'Top Rated'
        },
        {
            id: 5,
            name: 'Upcoming'
        }
    ])
    const [menuActive, setMenuActive] = useState(1)

    useEffect(() => {
        dispatch(requestMovieLatest())
        dispatch(requestMovieNowPlaying())
        dispatch(requestMoviePopular())
        dispatch(requestMovieTopRated())
        dispatch(requestMovieUpcoming())
        return () => {
            dispatch(clearMovieLatest())
            dispatch(clearMovieNowPlaying())
            dispatch(clearMoviePopular())
            dispatch(clearMovieTopRated())
            dispatch(clearMovieUpcoming())
        }
    }, [])

    const { movieNowPlaying, moviePopular, movieTopRated, movieUpcoming } = stateGlobal.Movie;
    return (
        <div className="home">
            <Header />
            <div className="home-wrapper-caurosel">
                <Carousel autoPlay={true} interval={3000} showThumbs={false} showStatus={false}>
                    { moviePopular ?
                        moviePopular.results.length > 0 ?
                            moviePopular.results.slice(0, 5).map((item, index) => 
                                    <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none' }} key={index}>
                                        <div key={item.id}>
                                            <img src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`} style={{ height: '450px', objectFit: 'cover' }}/>
                                        </div>
                                    </Link>
                                )
                            : <p>No data!</p>
                        : <p>Loading...</p>
                    }
                </Carousel>
            </div>
            <div className="home-menu">
                { dataMenu.map((item, index) => 
                    <div id={`menu-film${item.id}`} className={item.id === menuActive ? "home-menu-item home-menu-item-active" : "home-menu-item"} key={index} onClick={() => setMenuActive(item.id)}>
                        <p className={item.id === menuActive ? "home-menu-item-text home-menu-item-text-active" : "home-menu-item-text"} >{item.name}</p>
                    </div>
                ) }
            </div>
            <div className="home-main">
                { (menuActive === 1 || menuActive === 2) &&
                    <div className="home-main-section">
                        <p className="home-main-section-title">Now Playing</p>
                        <div className="home-main-section-content">
                            { movieNowPlaying ?
                                movieNowPlaying.results.length > 0 ?
                                    movieNowPlaying.results.slice(0, 10).map((item, index) => 
                                        <ItemMovie id={item.id} poster_path={item.poster_path} title={item.title} key={index} />
                                    )
                                    : <p>No data!</p>
                                : <p>Loading...</p>
                            }
                        </div>
                    </div>
                }
                { (menuActive === 1 || menuActive === 3) &&
                    <div className="home-main-section">
                        <p className="home-main-section-title">Popular</p>
                        <div className="home-main-section-content">
                            { moviePopular ?
                                moviePopular.results.length > 0 ?
                                    moviePopular.results.slice(0, 10).map((item, index) => 
                                        <ItemMovie id={item.id} poster_path={item.poster_path} title={item.title} key={index} />
                                    )
                                    : <p>No data!</p>
                                : <p>Loading...</p>
                            }
                        </div>
                    </div>
                }
                { (menuActive === 1 || menuActive === 4) &&
                    <div className="home-main-section">
                        <p className="home-main-section-title">Top Rated</p>
                        <div className="home-main-section-content">
                            { movieTopRated ?
                                movieTopRated.results.length > 0 ?
                                    movieTopRated.results.slice(0, 10).map((item, index) => 
                                        <ItemMovie id={item.id} poster_path={item.poster_path} title={item.title} key={index} />
                                    )
                                    : <p>No data!</p>
                                : <p>Loading...</p>
                            }
                        </div>
                    </div>
                }
                { (menuActive === 1 || menuActive === 5) &&
                    <div className="home-main-section">
                        <p className="home-main-section-title">Upcoming</p>
                        <div className="home-main-section-content">
                            { movieUpcoming ?
                                movieUpcoming.results.length > 0 ?
                                    movieUpcoming.results.slice(0, 10).map((item, index) => 
                                        <ItemMovie id={item.id} poster_path={item.poster_path} title={item.title} key={index} />
                                    )
                                    : <p>No data!</p>
                                : <p>Loading...</p>
                            }
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default Home

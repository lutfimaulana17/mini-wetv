import React from 'react';
import { Link } from 'react-router-dom';

const ItemMovie = (props) => {
    const { id, poster_path, title } = props
    return (
        <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
            <div className="home-main-section-content-item">
                <img className="home-main-section-content-item-img" src={`https://image.tmdb.org/t/p/w200${poster_path}`} />
                <p className="home-main-section-content-item-title">{title}</p>
            </div>
        </Link>
    )
}

export default ItemMovie;

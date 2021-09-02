import axios from 'axios';
import { CLEAR_MOVIE_LATEST_LIST, SET_MOVIE_LATEST_LIST, CLEAR_MOVIE_NOW_PLAYING_LIST, SET_MOVIE_NOW_PLAYING_LIST, CLEAR_MOVIE_POPULAR_LIST, SET_MOVIE_POPULAR_LIST, CLEAR_MOVIE_TOP_RATED_LIST, SET_MOVIE_TOP_RATED_LIST, CLEAR_MOVIE_UPCOMING_LIST, SET_MOVIE_UPCOMING_LIST, CLEAR_MOVIE_DETAIL, SET_MOVIE_DETAIL } from '../../../constants/initialType'
import { MOVIE_LATEST_URL, MOVIE_NOW_PLAYING_URL, MOVIE_POPULAR_URL, MOVIE_TOP_RATED_URL, MOVIE_UPCOMING_URL } from '../../../constants/initialHttp'

export const clearMovieLatest = () => ({
    type: CLEAR_MOVIE_LATEST_LIST,
    value: false
})

export const requestMovieLatest = () => {
    return async dispatch => {
        try {
            let res = await axios.get(`${process.env.REACT_APP_API_URL}${MOVIE_LATEST_URL}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            if (!res.error) {
                dispatch({type: SET_MOVIE_LATEST_LIST, value: res.data})
            } else {
                dispatch({type: SET_MOVIE_LATEST_LIST, value: []})
            }
        } catch (error) {
            dispatch({type: SET_MOVIE_LATEST_LIST, value: []})
        }
    }
}

export const clearMovieNowPlaying = () => ({
    type: CLEAR_MOVIE_NOW_PLAYING_LIST,
    value: false
})

export const requestMovieNowPlaying = () => {
    return async dispatch => {
        try {
            let res = await axios.get(`${process.env.REACT_APP_API_URL}${MOVIE_NOW_PLAYING_URL}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            if (!res.error) {
                dispatch({type: SET_MOVIE_NOW_PLAYING_LIST, value: res.data})
            } else {
                dispatch({type: SET_MOVIE_NOW_PLAYING_LIST, value: []})
            }
        } catch (error) {
            dispatch({type: SET_MOVIE_NOW_PLAYING_LIST, value: []})
        }
    }
}

export const clearMoviePopular = () => ({
    type: CLEAR_MOVIE_POPULAR_LIST,
    value: false
})

export const requestMoviePopular = () => {
    return async dispatch => {
        try {
            let res = await axios.get(`${process.env.REACT_APP_API_URL}${MOVIE_POPULAR_URL}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            if (!res.error) {
                dispatch({type: SET_MOVIE_POPULAR_LIST, value: res.data})
            } else {
                dispatch({type: SET_MOVIE_POPULAR_LIST, value: []})
            }
        } catch (error) {
            dispatch({type: SET_MOVIE_POPULAR_LIST, value: []})
        }
    }
}

export const clearMovieTopRated = () => ({
    type: CLEAR_MOVIE_TOP_RATED_LIST,
    value: false
})

export const requestMovieTopRated = () => {
    return async dispatch => {
        try {
            let res = await axios.get(`${process.env.REACT_APP_API_URL}${MOVIE_TOP_RATED_URL}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            if (!res.error) {
                dispatch({type: SET_MOVIE_TOP_RATED_LIST, value: res.data})
            } else {
                dispatch({type: SET_MOVIE_TOP_RATED_LIST, value: []})
            }
        } catch (error) {
            dispatch({type: SET_MOVIE_TOP_RATED_LIST, value: []})
        }
    }
}

export const clearMovieUpcoming = () => ({
    type: CLEAR_MOVIE_UPCOMING_LIST,
    value: false
})

export const requestMovieUpcoming = () => {
    return async dispatch => {
        try {
            let res = await axios.get(`${process.env.REACT_APP_API_URL}${MOVIE_UPCOMING_URL}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            if (!res.error) {
                dispatch({type: SET_MOVIE_UPCOMING_LIST, value: res.data})
            } else {
                dispatch({type: SET_MOVIE_UPCOMING_LIST, value: []})
            }
        } catch (error) {
            dispatch({type: SET_MOVIE_UPCOMING_LIST, value: []})
        }
    }
}

export const clearMovieDetail = () => ({
    type: CLEAR_MOVIE_DETAIL,
    value: false
})

export const requestMovieDetail = (id) => {
    return async dispatch => {
        try {
            let res = await axios.get(`${process.env.REACT_APP_API_URL}${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            if (!res.error) {
                dispatch({type: SET_MOVIE_DETAIL, value: res.data})
            } else {
                dispatch({type: SET_MOVIE_DETAIL, value: []})
            }
        } catch (error) {
            dispatch({type: SET_MOVIE_DETAIL, value: []})
        }
    }
}
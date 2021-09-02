import { CLEAR_MOVIE_LATEST_LIST, SET_MOVIE_LATEST_LIST, CLEAR_MOVIE_NOW_PLAYING_LIST, SET_MOVIE_NOW_PLAYING_LIST, CLEAR_MOVIE_POPULAR_LIST, SET_MOVIE_POPULAR_LIST, CLEAR_MOVIE_TOP_RATED_LIST, SET_MOVIE_TOP_RATED_LIST, CLEAR_MOVIE_UPCOMING_LIST, SET_MOVIE_UPCOMING_LIST, CLEAR_MOVIE_DETAIL, SET_MOVIE_DETAIL } from '../../../constants/initialType'

const initialState = {
    movieLatest: false,
    movieNowPlaying: false,
    moviePopular: false,
    movieTopRated: false,
    movieUpcoming: false,
    movieDetail: false
}

const Movie = (state = initialState, action) => {
    switch (action.type){
        case CLEAR_MOVIE_LATEST_LIST:
            return {
                ...state,
                movieLatest: action.value
            }    
        case SET_MOVIE_LATEST_LIST:
            return {
                ...state,
                movieLatest: action.value
            }      
        case CLEAR_MOVIE_NOW_PLAYING_LIST:
            return {
                ...state,
                movieNowPlaying: action.value
            }    
        case SET_MOVIE_NOW_PLAYING_LIST:
            return {
                ...state,
                movieNowPlaying: action.value
            }    
        case CLEAR_MOVIE_POPULAR_LIST:
            return {
                ...state,
                moviePopular: action.value
            }    
        case SET_MOVIE_POPULAR_LIST:
            return {
                ...state,
                moviePopular: action.value
            }     
        case CLEAR_MOVIE_TOP_RATED_LIST:
            return {
                ...state,
                movieTopRated: action.value
            }    
        case SET_MOVIE_TOP_RATED_LIST:
            return {
                ...state,
                movieTopRated: action.value
            } 
        case CLEAR_MOVIE_UPCOMING_LIST:
            return {
                ...state,
                movieUpcoming: action.value
            }    
        case SET_MOVIE_UPCOMING_LIST:
            return {
                ...state,
                movieUpcoming: action.value
            }  
        case CLEAR_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: action.value
            }    
        case SET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: action.value
            }                                                   
        default:   
             return state
    }
}

export default Movie
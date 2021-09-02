import { CLEAR_MOVIE_LIST, SET_MOVIE_LIST } from '../../../constants/initialType'

const initialState = {
    movie: false
}

const Movie = (state = initialState, action) => {
    switch (action.type){
        case CLEAR_MOVIE_LIST:
            return {
                ...state,
                movie: false
            }    
        case SET_MOVIE_LIST:
            return {
                ...state,
                movie: action.value
            }                                                   
        default:   
             return state
    }
}

export default Movie
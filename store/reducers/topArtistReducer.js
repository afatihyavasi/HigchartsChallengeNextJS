import {
    GET_TOP_ARTIST_START,
    GET_TOP_ARTIST_SUCCESS,
    GET_TOP_ARTIST_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
    isLoading: false,
    error: '',
    data: [],
};

const topArtistReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TOP_ARTIST_START:
            return { ...state, isLoading: action.payload };
        case GET_TOP_ARTIST_SUCCESS:
            return { ...state, data: action.payload, error: false };
        case GET_TOP_ARTIST_ERROR:
            return { ...state, data: [], error: action.payload };
        default:
            return state;
    }
};

export default topArtistReducer;

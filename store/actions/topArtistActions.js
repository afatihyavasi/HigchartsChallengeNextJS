import {
    GET_TOP_ARTIST_START,
    GET_TOP_ARTIST_SUCCESS,
    GET_TOP_ARTIST_ERROR,
} from './types';

export const getTopArtists = (form) => async (dispatch) => {
    try {
        dispatch({ type: GET_TOP_ARTIST_START, payload: true });
        const response = await fetch(
            `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${form.country.toLowerCase()}&api_key=b34b1d3084048c33ec1d45bcafbd8c1d&format=json`
        );
        const data = await response.json();
        dispatch({
            type: GET_TOP_ARTIST_SUCCESS,
            payload: data.topartists.artist.slice(0, form.topNumber),
        });
    } catch {
        dispatch({
            type: GET_TOP_ARTIST_ERROR,
            payload: `😔\u00A0\u00A0No data found for ${form.country.toUpperCase()} `,
        });
    } finally {
        dispatch({ type: GET_TOP_ARTIST_START, payload: false });
    }
};

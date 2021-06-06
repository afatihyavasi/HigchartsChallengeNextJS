import {
    GET_TOP_TRACKS_START,
    GET_TOP_TRACKS_SUCCESS,
    GET_TOP_TRACKS_ERROR,
} from './types';

export const getTopTrucks = (form) => async (dispatch) => {
    try {
        dispatch({ type: GET_TOP_TRACKS_START, payload: true });
        const response = await fetch(
            `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${form.country.toLowerCase()}&api_key=b34b1d3084048c33ec1d45bcafbd8c1d&format=json`
        );
        const data = await response.json();
        dispatch({
            type: GET_TOP_TRACKS_SUCCESS,
            payload: data.tracks.track.slice(0, form.topNumber),
        });
    } catch {
        dispatch({
            type: GET_TOP_TRACKS_ERROR,
            payload: `😔\u00A0\u00A0No data found for ${form.country.toUpperCase()} `,
        });
    } finally {
        dispatch({ type: GET_TOP_TRACKS_START, payload: false });
    }
};

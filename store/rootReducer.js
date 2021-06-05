import { combineReducers } from 'redux';
import topTracksReducer from './reducers/topTracksReducer';
import topArtistReducer from './reducers/topArtistReducer';
import formReducer from './reducers/formReducer';

export default combineReducers({
    topTracksReducer,
    topArtistReducer,
    formReducer,
});

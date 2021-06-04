import { combineReducers } from 'redux';
import topTracksReducer from './reducers/topTracksReducer';
import topArtistReducer from './reducers/topArtistReducer';

export default combineReducers({ topTracksReducer, topArtistReducer });

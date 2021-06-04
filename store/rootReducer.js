import { combineReducers } from 'redux';
import topTracksReducer from './reducers/topTracksReducer';
import topArtistsReducer from './reducers/topArtistsReducer';

export default combineReducers({ topTracksReducer, topArtistsReducer });

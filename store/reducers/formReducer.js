import { SET_FORM } from '../actions/types';

const INITIAL_VALUE = {
    country: 'Turkey',
    topNumber: '10',
};

const formReducer = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case SET_FORM:
            return {
                ...state,
                country: action.payload.country,
                topNumber: action.payload.topNumber,
            };
        default:
            return state;
    }
};

export default formReducer;

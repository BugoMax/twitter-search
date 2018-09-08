
/* eslint no-case-declarations: 0 */

import { FETCH_SEARCH_TWITS, FETCH_SEARCH_TWITS_SUCCESS, FETCH_SEARCH_TWITS_FAILED } from '../info/constants';
import createInitialState from '../info/createInitialState';

const contentReducer = () => {

    const initialState = createInitialState();

    return (state = initialState, action) => {

        switch (action.type) {
            case FETCH_SEARCH_TWITS:

                return Object.assign({}, state, { isLoad: true, twits: [], isFailed: false});

            case FETCH_SEARCH_TWITS_SUCCESS:

                return Object.assign({}, state, { isLoad: false, twits: action.payload, isFailed: false});

            case FETCH_SEARCH_TWITS_FAILED:

                return Object.assign({}, state, { isLoad: false, twits: [], isFailed: true});

            default:
                return state;
        }
    };
};

export default contentReducer;

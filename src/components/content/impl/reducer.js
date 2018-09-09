
/* eslint no-case-declarations: 0 */

import { FETCH_SEARCH_TWEETS, FETCH_SEARCH_TWEETS_SUCCESS, FETCH_SEARCH_TWEETS_FAILED } from '../info/constants';
import createInitialState from '../info/createInitialState';

const contentReducer = () => {

    const initialState = createInitialState();

    return (state = initialState, action) => {

        switch (action.type) {
            case FETCH_SEARCH_TWEETS:

                return Object.assign({}, state, { isLoad: true, tweets: [], isFailed: false});

            case FETCH_SEARCH_TWEETS_SUCCESS:

                return Object.assign({}, state, { isLoad: false, tweets: action.payload, isFailed: false});

            case FETCH_SEARCH_TWEETS_FAILED:

                return Object.assign({}, state, { isLoad: false, tweets: [], isFailed: true});

            default:
                return state;
        }
    };
};

export default contentReducer;

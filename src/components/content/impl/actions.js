
import * as constants from '../info/constants';

import getTestParams from './testParams';

export const fetchSearchTwitsSuccess = () => ({
    type: constants.FETCH_SEARCH_TWITS_SUCCESS, payload: getTestParams(12)
});

export const fetchSearchTwitsFailed = () => ({
    type: constants.FETCH_SEARCH_TWITS_FAILED
});

export const fetchSearchTwits = (value) => dispatch => {
    setTimeout(() => {
        dispatch(fetchSearchTwitsSuccess());
    }, 2000);
    return { type: constants.FETCH_SEARCH_TWITS };
};

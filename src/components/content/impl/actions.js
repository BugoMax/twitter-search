
import * as constants from '../info/constants';

import searchTweets from '../../../request/searchTweets';

export const fetchSearchTwitsSuccess = (tweets) => ({
    type: constants.FETCH_SEARCH_TWEETS_SUCCESS, payload: tweets
});

export const fetchSearchTwitsFailed = () => ({
    type: constants.FETCH_SEARCH_TWEETS_FAILED
});

export const fetchSearchTwits = (value) => dispatch => {

    const searchTwitPromise = searchTweets(value);

    searchTwitPromise.then((tweets) => {
        dispatch(fetchSearchTwitsSuccess(tweets));
    }).catch((err) => {
        dispatch(fetchSearchTwitsFailed());
    });

    dispatch({ type: constants.FETCH_SEARCH_TWEETS });
};

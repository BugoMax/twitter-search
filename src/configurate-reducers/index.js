
import { combineReducers } from 'redux';
import contentReducer from '../components/content/impl/reducer';

export const configurateReducers = () => {

    return combineReducers({
        content: contentReducer()
    });
};

export default configurateReducers;


import * as actions from '../../content/impl/actions';

export const mapStateToProps = (props) => ({});

export const mapDispatchToProps = (dispatch) => {
    return {
        onFetchSearch: (value) => dispatch(actions.fetchSearchTwits(value))
    };
};

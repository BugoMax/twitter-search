
export const mapStateToProps = (props) => {

    const { isLoad, tweets, isFailed } = props.content;

    return {
        isLoad,
        isFailed,
        tweets
    };
};

export const mapDispatchToProps = (dispatch) => ({});

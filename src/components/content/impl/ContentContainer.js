
export const mapStateToProps = (props) => {

    const { isLoad, twits, isFailed } = props.content;

    return {
        isLoad,
        isFailed,
        twits
    };
};

export const mapDispatchToProps = (dispatch) => ({});

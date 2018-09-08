
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Pagination from '../../pagination/Pagination.jsx';

class Content extends React.Component {

    render() {

        return <div>

            { this.props.isFailed ? <span>Request failed</span> : null }

            { this.props.isLoad
                ? <CircularProgress color="secondary" />
                : this.props.twits.length > 0
                    ? <Grid container spacing={24}>
                        <Grid item xs={6}>
                            <Pagination displayArr={this.props.twits} contentType="timeline" />
                        </Grid>
                        <Grid item xs={6}>
                            <Pagination displayArr={this.props.twits} contentType="grid" />
                        </Grid>
                    </Grid>
                    : <span>No results</span>
            }

        </div>;
    }
}

if (process.env !== 'production') {

    Content.propTypes = {
        isLoad: PropTypes.bool.isRequired,
        isFailed: PropTypes.bool.isRequired,
        twits: PropTypes.array.isRequired
    };
}

export default Content;

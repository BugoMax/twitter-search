
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import Pagination from '../../pagination/Pagination.jsx';

import './ContentView.scss';

class Content extends React.Component {

    render() {

        return <div>

            { this.props.isFailed
                ? <Typography className="content__text">Request failed</Typography>
                : null
            }

            { this.props.isLoad
                ? <CircularProgress color="secondary" className="content__progress" />
                : this.props.tweets.length > 0
                    ? <Grid container spacing={24}>
                        <Grid item xs={6}>
                            <Pagination displayArr={this.props.tweets} contentType="timeline" />
                        </Grid>
                        <Grid item xs={6}>
                            <Pagination displayArr={this.props.tweets} contentType="grid" />
                        </Grid>
                    </Grid>
                    : <Typography className="content__text">No results</Typography>
            }

        </div>;
    }
}

if (process.env !== 'production') {

    Content.propTypes = {
        isLoad: PropTypes.bool.isRequired,
        isFailed: PropTypes.bool.isRequired,
        tweets: PropTypes.array.isRequired
    };
}

export default Content;

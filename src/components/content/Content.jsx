
import React from 'react';
import Grid from '@material-ui/core/Grid';

import Pagination from '../pagination/Pagination.jsx';

import getTestParams from './testParams.js';

class Content extends React.Component {

    render() {

        const test = getTestParams(12);
        log.warn('PARAMS', test);

        return <div>

            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <Pagination displayArr={test} contentType="timeline" />
                </Grid>
                <Grid item xs={6}>
                    <Pagination displayArr={test} contentType="grid" />
                </Grid>
            </Grid>

        </div>;
    }
}

export default Content;


import React from 'react';
import Grid from '@material-ui/core/Grid';

import Pagination from '../pagination/Pagination.jsx';

class App extends React.Component {

    render() {

        return <div>

            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <Pagination displayArr={[]} />
                </Grid>
                <Grid item xs={6}>
                    <Pagination displayArr={[]} />
                </Grid>
            </Grid>

        </div>;
    }
}

export default App;

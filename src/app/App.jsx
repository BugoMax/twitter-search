
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SearchBar from '../components/search-bar/SearchBar';
import Content from '../components/content/Content';

import './App.scss';

class App extends React.Component {

    render() {

        return <div>
            <AppBar position="static" color="primary" className="app-bar">
                <Toolbar>
                    <Typography variant="title" color="textSecondary" className="app-bar__title">
                        Twitter search
                    </Typography>
                </Toolbar>
            </AppBar>

            <SearchBar/>

            <Content/>

        </div>;
    }
}

export default App;

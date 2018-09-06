
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SearchBar from '../components/search-bar/view/SearchBar.jsx';
import Content from '../components/content/Content.jsx';

import './App.scss';

class App extends React.Component {

    render() {

        return <div>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="title" color="textSecondary">
                        Twitter search
                    </Typography>
                </Toolbar>
            </AppBar>

            <SearchBar/>

            <ul>
                <li role="button" className="content-style__item">
                    <span className="content-style__item_timeline" />
                    <p>Embedded Grid</p>
                </li>
                <li role="button" className="content-style__item">
                    <span className="content-style__item_grid" />
                    <p>Embedded Timeline</p>
                </li>
            </ul>

            <Content/>

        </div>;
    }
}

export default App;

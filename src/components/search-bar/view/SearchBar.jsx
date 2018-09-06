
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar({text}) {

    return (
        <div>

            <TextField
                id="search"
                className="header__search"
                label="Enter"
                type="search"
                margin="normal"
                // onChange={fireOnSearch}
            />
            <IconButton>
                <SearchIcon />
            </IconButton>

        </div>
    );
}

if (process.env !== 'production') {

    SearchBar.propTypes = {
        text: PropTypes.object
    };
}

export default SearchBar;

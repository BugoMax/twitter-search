
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

class SearchBarView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        return (
            <div className="search-bar">

                <TextField
                    id="search"
                    className="search-bar__field"
                    label="Enter"
                    type="search"
                    margin="normal"
                    onChange={this.handleChange}
                />
                <IconButton color="inherit" onClick={() => this.props.onFetchSearch(this.state.inputValue)}>
                    <SearchIcon />
                </IconButton>

            </div>
        );
    }
}

if (process.env !== 'production') {

    SearchBarView.propTypes = {
        onFetchSearch: PropTypes.func.isRequired
    };
}

export default SearchBarView;

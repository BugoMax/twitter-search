
import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const checkColsN = (index) => {

    const prevIndex = index - 1;

    return index % 4 === 0 || prevIndex % 4 === 0;
};

class GridListT extends React.Component {

    render() {

        log.warn('GRID PARAMS', this.props.params);

        return <div>

            <GridList cellHeight={200} spacing={1}>
                { this.props.params.map((item, index) => {
                    const colsN = index !== 0 && index !== 1 && checkColsN(index) ? 2 : 1;
                    return <GridListTile cols={1} rows={colsN} key={item.id} >
                        <img src={item.user.profile_image_url} alt="alt" />
                        <GridListTileBar
                            title={item.entities.hashtags[0].text}
                            subtitle={<span>{item.text}</span>}
                            actionIcon={
                                <IconButton>
                                    <StarBorderIcon />
                                </IconButton>
                            }
                            actionPosition="left"
                        />
                    </GridListTile>;
                })}
            </GridList>

        </div>;
    }
}

if (process.env !== 'production') {

    GridListT.propTypes = {
        params: PropTypes.array.isRequired
    };
}

export default GridListT;

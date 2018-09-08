
import React from 'react';
import PropTypes from 'prop-types';
import UIGridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const handleCheckColsN = (index) => index % 4 === 0 || (index - 1) % 4 === 0;

class GridList extends React.Component {

    render() {

        return <div>

            <UIGridList cellHeight={200} spacing={1}>
                { this.props.params.map((item, index) => {
                    return <GridListTile cols={1} rows={index !== 0 && index !== 1 && handleCheckColsN(index) ? 2 : 1} key={item.id} >
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
            </UIGridList>

        </div>;
    }
}

if (process.env !== 'production') {

    GridList.propTypes = {
        params: PropTypes.array.isRequired
    };
}

export default GridList;


import React from 'react';
import PropTypes from 'prop-types';
import UIGridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class GridList extends React.Component {

    render() {

        const getN = (index) => index % 5 === 0 ? 2 : 1;

        return <div>

            <UIGridList cellHeight={200} spacing={1}>
                { this.props.params.map((item, index) => {
                    return <GridListTile cols={getN(index + 1)} rows={getN(index + 1)} key={item.id} >
                        <img src={item.user.profile_image_url} alt={item.entities.hashtags[0].text} />
                        <GridListTileBar
                            title={<a
                                href={item.user.url}
                                className="grid-item__link"
                                rel="noopener noreferrer"
                                target="_blank"
                            >{item.user.screen_name}</a>}
                            subtitle={<a
                                href={item.entities.urls[0].url}
                                className="grid-item__link"
                                rel="noopener noreferrer"
                                target="_blank"
                            >{item.text}</a>}
                            actionIcon={
                                <IconButton>
                                    <StarBorderIcon className="grid-item__icon" />
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

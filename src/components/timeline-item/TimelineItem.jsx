
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActions';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './TimelineItem.scss';

class TimelineItem extends React.Component {

    render() {

        return <Card className="timeline-item">
            <CardActionArea>
                <CardMedia
                    className="tweets-card-img"
                    component="img"
                    height="140"
                    image={this.props.params.user.profile_image_url}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.props.params.user.screen_name}
                    </Typography>
                    <Typography component="p">
                        {this.props.params.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>;
    }
}

if (process.env !== 'production') {

    TimelineItem.propTypes = {
        params: PropTypes.object.isRequired
    };
}

export default TimelineItem;

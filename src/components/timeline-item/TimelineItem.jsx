
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
                    <Typography gutterBottom variant="headline" component="h2" className="timeline-item__title">
                        <a
                            href={this.props.params.user.url}
                            className="timeline-item__link"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {this.props.params.user.screen_name}
                        </a>
                    </Typography>
                    <Typography component="p" className="timeline-item__text">
                        {this.props.params.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a
                        href={this.props.params.entities.urls[0].url}
                        className="timeline-item__link"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Learn More
                    </a>
                </Button>
                <Typography component="p" className="timeline-item__time" align="right">
                    {this.props.params.created_at}
                </Typography>
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

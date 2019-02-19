import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const cardStyle = theme => ({
  cardSize: {
    width: 200,
    fontSize: '16px',
    padding: '15px',
    margin: '10px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  media: {
    height: 140,
  }
});


class Profile extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
     expanded: false
   };
   this.handleExpandClick =
   this.handleExpandClick.bind(this);
 }

 handleExpandClick(){
   if (this.state.expanded === false){
     this.setState({expanded: true});
   } else {
     this.setState({expanded: false});
   }
 }

  render() {
    const classes = this.props;

    return(
      <div>
        <Card className={classes.cardSize}>
          <Typography variant="display1" align="left">{this.props.name}</Typography>
          <CardActions>
            <IconButton className={classnames(classes.expand, {[classes.expandOpen]: this.state.expanded,})}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}>
                <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <ul>
                <li>Age: {this.props.age}</li>
                <li>Height: {this.props.height}</li>
                <li>Weight: {this.props.weight}</li>
                <li>Skills: {this.props.skills}</li>
              </ul>

            </CardContent>
          </Collapse>
        </Card>

      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  age:  PropTypes.string,
  height:  PropTypes.string,
  weight: PropTypes.string,
  skills:  PropTypes.string
};

export default withStyles(cardStyle)(Profile);

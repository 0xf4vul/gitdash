import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import StarIcon from 'react-icons/lib/go/star';
import ForkIcon from 'react-icons/lib/go/repo-forked';
import EyeIcon from 'react-icons/lib/go/eye';

class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Card style={{width: '250px', margin: '5px'}}>
        <CardHeader
          title="atom"
          avatar="https://avatars0.githubusercontent.com/u/1089146?v=3&s=200"
          subtitle="atom"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions style={{textAlign: 'center'}}>
          <StarIcon style={{fontSize: '36px', marginRight: '20px'}}/>
          <ForkIcon style={{fontSize: '36px', marginRight: '20px'}}/>
          <EyeIcon style={{fontSize: '36px'}}/>
        </CardActions>
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );
  }
}

export default Repo;

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

class GitNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        key: 'SECRET',
        visible: false
      }
    };
  }
  showKey() {
    let title = this.state.title;
    title.visible = !title.visible;
    this.setState({
      title: title
    });
  }
  render() {
    return (
      <Toolbar>
        <ToolbarGroup style={{ width: '100%', textAlign: 'right' }}>
          <ToolbarTitle text={!this.state.title.visible ? '' : this.state.title.key} />
          <RaisedButton label={!this.state.title.visible ? 'SHOW KEY' : 'HIDE KEY'} primary={true} onClick={this.showKey.bind(this)}/>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default GitNavBar;

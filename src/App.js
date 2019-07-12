import React from 'react';

import RootContent from './content/root.js';
import Header from './header/header.js';
import Grid from '@material-ui/core/Grid';

const styles = {
  content: {
    marginTop: 3 * 8,
  }
};
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tabVal: (window.location.hash.replace("#", "") || "index")
    }
  }

  handleTabChange = (event, value) => {
    this.setState({tabVal: value});
  };

  render() {
    const HeaderProps = {
      handleTabChange: this.handleTabChange,
      tabVal: this.state.tabVal
    };
    const RootContentProps = {
      tabVal: this.state.tabVal
    };
    return (<div>
      <Header {...HeaderProps} />
      <Grid style={styles.content}>
        <RootContent {...RootContentProps} />
      </Grid>
    </div>);
  }
}

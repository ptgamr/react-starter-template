import React from 'react';
import Title from 'react-title-component';

import AppBar from 'material-ui/lib/app-bar';
import {Spacing} from 'material-ui/lib/styles';
import {StyleResizable} from 'material-ui/lib/mixins';

import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import {darkWhite, lightWhite, grey900} from 'material-ui/lib/styles/colors';

import AppLeftNav from './AppLeftNav';

const Master = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    location: React.PropTypes.object,
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  mixins: [
    StyleResizable,
  ],

  getInitialState() {
    return {
      muiTheme: getMuiTheme(),
      leftNavOpen: false,
    };
  },

  getStyles() {
    const styles = {
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top: 0,
      },
      root: {
        paddingTop: Spacing.desktopKeylineIncrement,
        minHeight: 400,
      },
      content: {
        margin: Spacing.desktopGutter,
      },
      contentWhenMedium: {
        margin: `${Spacing.desktopGutter * 2}px ${Spacing.desktopGutter * 3}px`,
      },
      footer: {
        backgroundColor: grey900,
        textAlign: 'center',
      },
      a: {
        color: darkWhite,
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: lightWhite,
        maxWidth: 356,
      },
      iconButton: {
        color: darkWhite,
      },
    };

    if (this.isDeviceSize(StyleResizable.statics.Sizes.MEDIUM) ||
        this.isDeviceSize(StyleResizable.statics.Sizes.LARGE)) {
      styles.content = Object.assign(styles.content, styles.contentWhenMedium);
    }

    return styles;
  },

  handleTouchTapLeftIconButton() {
    this.setState({
      leftNavOpen: !this.state.leftNavOpen,
    });
  },

  handleChangeRequestLeftNav(open) {
    this.setState({
      leftNavOpen: open,
    });
  },

  handleRequestChangeList(event, value) {
    this.context.router.push(value);
    this.setState({
      leftNavOpen: false,
    });
  },


  render() {
    const {
      location,
      children,
    } = this.props;

    let {
      leftNavOpen,
    } = this.state;

    const router = this.context.router;
    const styles = this.getStyles();
    const title =
      router.isActive('/') ? 'Home' :
      router.isActive('/orders') ? 'Orders' :
      router.isActive('/feeds') ? 'Feeds' : '';


    let docked = false;
    let showMenuIconButton = true;

    if (this.isDeviceSize(StyleResizable.statics.Sizes.LARGE) && title !== '') {
      docked = true;
      leftNavOpen = true;
      showMenuIconButton = false;

      styles.leftNav = {
        zIndex: styles.appBar.zIndex - 1,
      };
      styles.root.paddingLeft = 256;
      styles.footer.paddingLeft = 256;
    }

    return (
      <div>
        <Title render="Kudoo.net" />
        <AppBar
          onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
          title={title}
          zDepth={0}
          style={styles.appBar}
          showMenuIconButton={showMenuIconButton}
        />
        {children}
        <AppLeftNav
          style={styles.leftNav}
          location={location}
          docked={docked}
          onRequestChangeLeftNav={this.handleChangeRequestLeftNav}
          onRequestChangeList={this.handleRequestChangeList}
          open={leftNavOpen}
        />
      </div>
    );
  },
});

export default Master;

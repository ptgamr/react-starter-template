import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import {
  Spacing,
  Typography,
} from 'material-ui/lib/styles';
import zIndex from 'material-ui/lib/styles/zIndex';
import {cyan500} from 'material-ui/lib/styles/colors';

import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';


const AppLeftNav = React.createClass({
  propTypes: {
    docked: React.PropTypes.bool.isRequired,
    location: React.PropTypes.object.isRequired,
    onRequestChangeLeftNav: React.PropTypes.func.isRequired,
    onRequestChangeList: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool.isRequired,
    style: React.PropTypes.object,
  },

  contextTypes: {
    muiTheme: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired,
  },

  styles: {
    logo: {
      cursor: 'pointer',
      fontSize: 24,
      color: Typography.textFullWhite,
      lineHeight: `${Spacing.desktopKeylineIncrement}px`,
      fontWeight: Typography.fontWeightLight,
      backgroundColor: cyan500,
      paddingLeft: Spacing.desktopGutter,
      marginBottom: 8,
    },
    version: {
      paddingLeft: Spacing.desktopGutterLess,
      fontSize: 16,
    },
  },

  render() {
    const {
      //location,
      docked,
      onRequestChangeLeftNav,
      //onRequestChangeList,
      open,
      style,
    } = this.props;

    return (
      <LeftNav
        style={style}
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeLeftNav}
        containerStyle={{zIndex: zIndex.leftNav - 100}}
      >
        <List>
          <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
          <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
          <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
          <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
          <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
        </List>
        <Divider />
        <List>
          <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
        </List>
      </LeftNav>
    );
  },
});

export default AppLeftNav;

import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styles from './styles';

const menuId = 'primary-search-account-menu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }
  handleProfileMenuOpen = (e) => {
    console.log('handleProfileMenuOpen');
    this.setState({
      anchorEl: e.currentTarget,
    });
  };
  handleMenuClose = () => {
    const { history } = this.props;
    console.log('handleMenuClose');
    this.setState({
      anchorEl: null,
    });
    history.push('/sign-in');
  };

  renderMenu = () => {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>LogOut</MenuItem>
      </Menu>
    );
  };
  handleToggleSlideBar = () => {
    const { showSidebar, onToggleSlideBar } = this.props;
    if (onToggleSlideBar) {
      onToggleSlideBar(!showSidebar);
      console.log(showSidebar);
    }
  };
  render() {
    const { classes, name } = this.props;
    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleToggleSlideBar}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              {name}
            </Typography>

            <div className={classes.grow} />

            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {this.renderMenu()}
      </div>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object,
  showSidebar: PropTypes.bool,
  name: PropTypes.string,
  onToggleSlideBar: PropTypes.func,
};
export default withStyles(styles)(withRouter(Header));

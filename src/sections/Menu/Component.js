import React from 'react';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';

import { Link as RouterLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import {
  FaEnvelope as MesakIkon,
  FaUsers as KlupIkon,
  FaCode as BolumIkon,
  FaCogs as FakulteIkon,
  FaUniversity as UniGenelIkon,
  FaJsSquare as JSIcon,
  FaReact as ReactIcon,
  FaGithub as GithubIcon,
  FaBug as BugIcon,
  FaUser as OgrIcon,
} from 'react-icons/fa';

import isMobile from 'utils/isMobile';

import useStyles from './styles';

const StyledMenuItem = withStyles({ root: { width: '100%' } })(props => <MenuItem {...props} />);

function Menu({ isOpen, onClose, onOpen }) {
  const classes = useStyles({
    isOpen,
    isMobile,
  });
 
  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      swipeAreaWidth={30}
      disableBackdropTransition={true}
    >
      <List className={classes.list}>
        <div className={classes.toolbar} />

        <StyledMenuItem onClick={onClose} component={RouterLink} to="/OgrBilgi">
          <ListItemIcon>
            <OgrIcon />
          </ListItemIcon>
          <ListItemText primary="Öğrenci Bilgi" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/UniGenel">
          <ListItemIcon>
            <UniGenelIkon />
          </ListItemIcon>
          <ListItemText primary="Üniversite Genel" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/Fakulte">
          <ListItemIcon>
            <FakulteIkon />
          </ListItemIcon>
          <ListItemText primary="Fakülte" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/Bolum">
          <ListItemIcon>
            <BolumIkon />
          </ListItemIcon>
          <ListItemText primary="Bölüm" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/Kulup">
          <ListItemIcon>
            <KlupIkon />
          </ListItemIcon>
          <ListItemText primary="Klüp" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onClose} component={RouterLink} to="/Mesaj">
          <ListItemIcon>
            <MesakIkon />
          </ListItemIcon>
          <ListItemText primary="Mesaj" />
          </StyledMenuItem>
        
      </List>
    </SwipeableDrawer>
  );
}

export default Menu;

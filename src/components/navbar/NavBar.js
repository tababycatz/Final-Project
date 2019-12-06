import React from "react";
import Link from '@material-ui/core/Link';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from '@material-ui/core/AppBar';
import HomeIcon from '@material-ui/icons/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';


const NavBar = () => {
 
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    PersonIcon: {
      marginRight: theme.spacing(6),
    },
    PlayArrowIcon: {
      marginRight: theme.spacing(4),
    },
    LoginButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const classes = useStyles();
  
  return (
    <React.Fragment>
          <CssBaseline />
          <Container fixed>
            <div className='menu-bar'>
            <AppBar position="static">
              <Toolbar>
              <Typography variant="h6" className={classes.title}>
              <Link href="/"  className="nav-link" title='Home'color="inherit">
                  <HomeIcon color="inherit"/> dogMUD
              </Link>
              </Typography>
              <Typography variant="h6" className={classes.title}>
              <Link href="/play" className="nav-link" title='Play' color="inherit">
                  <PlayArrowIcon color="inherit"/> Play
              </Link>
              </Typography>
              </Toolbar>
              </AppBar>
              </div>
          </Container>
    </React.Fragment>
          
    );
  };
  
  
export default NavBar;
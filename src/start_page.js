import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Link from '@material-ui/core/Link';
//import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';
import './button.css';
import './App.css';
import {Link} from "react-router-dom";


/*function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}*/

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: theme.spacing(30),
    margin: theme.spacing(22),
    backgroundColor: teal[500],
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(-18),
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
    fontSize:25,
    color:teal[500],
    backgroundColor: grey[300],
  },
}));

var sectionStyle = {
  height : '100vh',
  backgroundSize: 'cover',
  backgroundImage: 'url(https://i.imgur.com/rWuv7hB.jpg)',
};

export default function SignIn() {
  const classes = useStyles();

  return (
  <div style={sectionStyle}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <FreeBreakfastIcon />
        </Avatar>
        <form className={classes.form} noValidate>
          <div className="App">
            <Typography variant="h3">
              Coffee Journey
            </Typography>
          </div>
          <Link className="btnlink" to ="/starbucks">
              <Button
                type="submit"
                fullWidth
                variant="text"
                color="primary"
                className={classes.submit}
              >
                Starbucks
              </Button>
          </Link>
          <Link className="btnlink" to ="/louisa">
            <Button
              type="submit"
              fullWidth
              variant="text"
              className={classes.submit}
            >
              Louisa
            </Button>
          </Link>
        </form>
      </div>
    </Container>
    </div>
  );
}

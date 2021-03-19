import React from 'react';
import { observer } from 'mobx-react';
import {
  withRouter,
  RouteComponentProps,
  Link,
} from 'react-router-dom';
import {
  Paper,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IState {}

const useStyles = makeStyles(theme => ({
  paperStyle: {
    padding: theme.spacing(2),
  },
  linkStyle: {
    marginRight: theme.spacing(2),
  },
}));

const AppHeader = (props: IProps, state: IState) => {
  const classes = useStyles();

  return (
    <Paper square className={classes.paperStyle}>
      <Link to="/" className={classes.linkStyle}>
        <Button variant="contained" color="primary">Home</Button>
      </Link>
      <Link to="/setting">
        <Button variant="contained" color="secondary">Setting</Button>
      </Link>
    </Paper>
  );
};

export default withRouter(observer(AppHeader));

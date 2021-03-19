import React, { ReactNode } from 'react';
import { observer } from 'mobx-react';
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import {
  Paper,
  Zoom,
  Fab,
  useScrollTrigger,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { pink, grey } from '@material-ui/core/colors';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import AppDial from '@con/app-dial';
import AppHeader from '@commonComp/app-header';
import Page from '../page';
import Setting from '../setting';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IScrollProps {
  children?: ReactNode,
  window?: any,
}
interface IState {}

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  hyphenStyle: {
    height: '3px',
    width: '100%',
    lineHeight: 0,
    background: pink.A200,
  },
  paperStyle: {
    width: '100%',
    flex: 1,
    background: grey[100],
  },
  upTopStyle: {
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const ScrollTop = (props: IScrollProps, state: IState) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const onTop = (event: any) => {
    // console.log('--- ', document.querySelector('#back-to-top'));
    const anchor = document.querySelector('#back-to-top');

    if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <Zoom in={trigger}>
      <div onClick={onTop} role="presentation">
        {children}
      </div>
    </Zoom>
  );
};

const Home = (props: IProps, state: IState) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <p id="back-to-top" className={classes.hyphenStyle} />

      <AppDial />
      <AppHeader />

      <Paper square className={classes.paperStyle}>
        <ScrollTop>
          <Fab
            size="small"
            color="primary"
            className={classes.upTopStyle}>
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>

        <Switch>
          <Route path="/setting" component={Setting} />
          <Route component={Page} />
        </Switch>
      </Paper>
    </Box>
  );
};

export default withRouter(observer(Home));

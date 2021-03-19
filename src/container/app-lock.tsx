import React, {
  useEffect,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Paper,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import auth from '@commonStore/auth';
import AppPortal from './app-portal';

interface IProps extends RouteComponentProps {
  history: any;
}
interface IState {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    lockStyle: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1100,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.6)',
    },
    top30: {
      marginTop: '30px',
    },
  }));

const AppLock = (props: IProps, state: IState) => {
  const { history } = props;
  const { isAuth, setAuth, showPwd, toggleShow, pwd, setPwd, isError, setError, reset } = auth;
  const classes = useStyles();

  useEffect(() => {
    reset();
  }, []);

  const onLogin = () => {
    if (pwd === '2020') {
      setError(false);
      setAuth(true);
      history.push('/');
    } else {
      setError(true);
      setAuth(false);
    }
  };

  const changePwd = (event: ChangeEvent) => {
    // @ts-ignore
    setPwd(event.target.value);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    const keyCode = event.keyCode || event.charCode;

    if (keyCode === 13) onLogin();
  };

  return (
    <AppPortal>
      <Paper square className={classes.lockStyle}>
        <FormControl variant="filled" error={isError}>
          <InputLabel>Password</InputLabel>
          <Input
            autoFocus
            type={showPwd ? 'text' : 'password'}
            value={pwd}
            endAdornment={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <InputAdornment position="end">
                <IconButton onClick={toggleShow}>
                  { showPwd ? <Visibility /> : <VisibilityOff /> }
                </IconButton>
              </InputAdornment>
            }
            onChange={changePwd}
            onKeyDown={onKeyDown} />
          <FormHelperText className={isError ? 'visible' : 'hidden'}>Error</FormHelperText>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={onLogin}
          className={classes.top30}>
          Login
        </Button>
      </Paper>
    </AppPortal>
  );
};

export default withRouter(observer(AppLock));

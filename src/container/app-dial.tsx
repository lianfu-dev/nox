import React, { useState } from 'react';
import { withRouter, RouteChildrenProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LockIcon from '@material-ui/icons/Lock';
import RefreshIcon from '@material-ui/icons/Refresh';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import auth from '@commonStore/auth';

interface IProps extends RouteChildrenProps {
  history: any,
}
interface IState {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    speedDial: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
    iconBg: {
      backgroundColor: '#22c298',
    },
  }));

const AppDial = (props: IProps, state: IState) => {
  const { history } = props;
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  // open dial
  const openDial = () => {
    setOpen(true);
  };

  // close dial
  const closeDial = () => {
    setOpen(false);
  };

  // on lock
  const onLock = () => {
    auth.setAuth(false);
    // history.push('/lock');
  };

  // go to Top
  const onTop = () => {
    const anchor = document.querySelector('#back-to-top');

    if (anchor) anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const actions = [
    { icon: <RefreshIcon color="primary" />, name: 'Refresh' },
    { icon: <ArrowUpwardIcon color="primary" onClick={onTop} />, name: 'Top' },
    { icon: <FavoriteIcon color="primary" />, name: 'Like' },
    { icon: <LockIcon color="primary" onClick={onLock} />, name: 'Lock' },
  ];
  return (
    <SpeedDial
      ariaLabel="Dial"
      icon={<SpeedDialIcon />}
      open={open}
      onOpen={openDial}
      onClose={closeDial}
      direction="up"
      className={classes.speedDial}>

      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          tooltipPlacement="left"
          onClick={closeDial} />
      ))}
    </SpeedDial>
  );
};

export default withRouter(observer(AppDial));

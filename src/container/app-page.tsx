import React from 'react';

import AppTheme from './app-theme';
import AppRoute from './app-route';

interface IProps {}
interface IState {}

const AppPage = (props: IProps, state: IState) => {
  return (
    <AppTheme>
      <AppRoute />
    </AppTheme>
  );
};

export default AppPage;

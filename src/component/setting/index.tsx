import React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@material-ui/core';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IState {}

const Setting = (props: IProps, state: IState) => {
  return (
    <Paper square>
      <h3>--- Setting Page ---</h3>
      <h3>一缕烟，过心间，具思念，忆千年...</h3>
      <Link to="/">
        <Button variant="contained" color="primary">Go Home</Button>
      </Link>
    </Paper>
  );
};

export default withRouter(observer(Setting));

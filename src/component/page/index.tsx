import React from 'react';
import { observer } from 'mobx-react';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IState {}

const Page = (props: IProps, state: IState) => {
  return (
    <div>
      <p>Hello</p>
    </div>
  );
};

export default withRouter(observer(Page));

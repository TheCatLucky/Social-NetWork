import React, { FC } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../redux/reduxStore";
let mapStateToPropsRedirect = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
type MapProps = {
  isAuth: boolean;
};
export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  const RedirectComponent:FC<MapProps> = (props) => {
    if (!props.isAuth) {
      return <Navigate to={"/login"} />;
    }

    let { isAuth, ...restProps } = props;
    return <WrappedComponent {...restProps as WCP} />;
  };

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);
  return ConnectedAuthRedirectComponent;
}

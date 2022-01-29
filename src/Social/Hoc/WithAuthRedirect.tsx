import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppStateType } from '../redux/reduxStore';

export const withAuthRedirect = (Component: any) => {
  const RedirectComponent = (props: any) => {
    if (!props.isAuth) {
      return (
        <Navigate to={"/login"} />
      )
    }
    return (
      <Component {...props} />
    )
  }

  let mapStateToPropsRedirect = (state:AppStateType) => {
    return {
      isAuth: state.auth.isAuth
    }
  }
  
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
  return ConnectedAuthRedirectComponent;
}
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route {...rest} render={({ location }) => {
      if (!user) {
        return children;
      } else {
        return <Navigate to={loggedInPath} replace={true} />;
      }
    }} />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route {...rest} render={({ location }) => {
      if (user) {
        return children;
      } else {
        return <Navigate to="/login" replace={true} />;
      }
    }} />
  );
}

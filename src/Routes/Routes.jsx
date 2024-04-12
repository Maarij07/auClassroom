import React from 'react';
import { Route } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!user) {
          return children;
        } else {
          window.location.replace(loggedInPath);
          return null;
        }
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        } else {
          window.location.replace('/login');
          return null;
        }
      }}
    />
  );
}

import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: true,
  onLogout: () => {},
  darkMode: true,
  themeChangeHandler : function(){},
});
export default AuthContext;
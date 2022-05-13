import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';
import './App.css'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedUserLoggedInfo = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const [theme, setTheme] = useState(false)

  function themeChangeHandler() {
    if (!theme) {
      localStorage.setItem('theme', 'dark')
    } else {
      localStorage.removeItem('theme')
    }
    setTheme(!theme)
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      setTheme(true)
    }
  }, [])

  const loginHandler = async (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const body = document.getElementById('root').parentElement.parentElement
  body.className = theme ? 'dark' : ''

  return (
    <div>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler,
          darkMode: theme,
          themeChangeHandler: themeChangeHandler,
        }}
      >
        <MainHeader />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    </div>
  );
}
export default App;
import React from 'react';
import classes from './Card.module.css';
import AuthContext from '../../../store/auth-context';
import { useContext } from 'react';

const Card = (props) => {
  const contextData = useContext(AuthContext);
  return (
    <div className={`${classes.card} ${props.className}`} id={contextData.darkMode === true ? classes.dark : ''}>{props.children}</div>
  );
};

export default Card;

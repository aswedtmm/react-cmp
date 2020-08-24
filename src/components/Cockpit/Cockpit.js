import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  //console.log(authContext.authenticated);

  useEffect(() => {
    toggleBtnRef.current.click();
  }, [toggleBtnRef]);

  const assignedClasses = [];
  let btnClass = '';
  let alertDelete;
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  if (props.alertDelete.alertIndex >= 0) {
    alertDelete = (
      <div>
        <p>Are you sure you want to delete: {props.alertDelete.alertPersonName}?</p>
        <button className={classes.Red} onClick={() => props.deleteConfirmed(props.alertDelete.alertIndex)}>Confirm</button>
      </div>);
  }

  return (
    <div className={classes.Cockpit}>
      {alertDelete}
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/WithClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <div className={classes.PersonWrapper}>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
            <p>Please log in</p>
          )}

        <p>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        <button className={classes.deleteButton} onClick={this.props.click}>Delete</button>
      </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);

import React, { Component } from 'react';
import withClass from '../../../hoc/WithClass'
import classes from './User.css';

class User extends Component {
    render() {
        return (
            <div className={classes.UserContainer}>
                <p>{this.props.firstName}</p>
                <p>{this.props.email}</p>
            </div>

        );
    }

}

export default withClass(User);
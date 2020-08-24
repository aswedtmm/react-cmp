import React, { Component } from 'react';
import withClass from '../../hoc/WithClass';
import classes from './Users.css';
import { ApiTwo } from '../../axios';
import User from './User/User';

class Users extends Component {

    state = {
        apiTwoData: [],
        apiError: false
    }

    componentDidMount() {
        ApiTwo.get('/api/users?page=1').then(
            res => {
                console.log('RES: ', res);
                const response = res.data.data.splice(0, 6);
                this.setState({ apiTwoData: response });
            }
        ).catch(
            err => {
                console.log('ERR: ', err);
                this.serState({ apiError: true });
            });
    }

    render() {
        let data = <p>Loading...</p>
        if (!this.state.apiError) {
            data = this.state.apiTwoData.map(res => {
                return <User
                    key={res.id}
                    firstName={res.first_name}
                    email={res.email}
                >
                </User>
            });
        }
        return (
            <div>
                {data}
            </div>
        );
    }
}

export default withClass(Users, classes.Users);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Home.css';
import Persons from '../../components/Persons/Persons';
import Cockpit from '../../components/Cockpit/Cockpit';
import withClass from '../../hoc/WithClass';
import Aux from '../../hoc/Aux';
import AuthContext from '../../context/auth-context';
import * as actions from '../../store/actions/index';

class Home extends Component {

    nameChangedHandler = (event, id) => {
        const personIndex = this.props.prs.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.props.prs[personIndex]
        };

        person.name = event.target.value;
        this.props.onHandlePersonName(personIndex, person);

    };

    render() {
        let persons = null;

        if (this.props.sprs) {
            persons = (
                <Persons
                    persons={this.props.prs}
                    clicked={this.props.onAlertDelete}
                    changed={this.nameChangedHandler}
                    isAuthenticated={this.props.auth}
                />
            );
        }

        return (
            <Aux>
                <button
                    onClick={this.props.onHideCockpit}
                >
                    Remove Cockpit
                 </button>
                <AuthContext.Provider
                    value={{
                        authenticated: this.props.auth,
                        login: this.props.onAuthenticated
                    }}
                >
                    {this.props.sct ? (
                        <Cockpit
                            deleteConfirmed={this.props.onPersonDelete}
                            alertDelete={this.props.alertDeleteprs}
                            title={this.props.appTitle}
                            showPersons={this.props.sprs}
                            personsLength={this.props.prs.length}
                            clicked={this.props.onTogglePersons}
                        />
                    ) : null}
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.prs.persons,
        alertDeleteprs: state.prs.alertDeletePerson,
        sprs: state.prs.showPersons,
        sct: state.prs.showCockpit,
        auth: state.prs.authenticated
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAlertDelete: (aIndx, prsName) => dispatch(actions.alertDeletePerson(aIndx, prsName)),
        onPersonDelete: (prsIndx) => dispatch(actions.deletePerson(prsIndx)),
        onTogglePersons: () => dispatch(actions.togglePerson()),
        onHideCockpit: () => dispatch(actions.hideCockput()),
        onAuthenticated: () => dispatch(actions.authenticated()),
        onHandlePersonName: (prsIndx, prsName) => dispatch(actions.handleName(prsIndx, prsName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withClass(Home, classes.Home));

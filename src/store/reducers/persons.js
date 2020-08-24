import * as actionTypes from '../actions/actionTypes';
import updateObject from '../util';

const initialState = {
    persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    authenticated: false,
    alertDeletePerson: {
        alertIndex: -1,
        alertPersonName: null
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ALERT_DELETE_PERSON:
            return {
                ...state,
                alertDeletePerson: {
                    ...state.alertDeletePerson,
                    alertIndex: action.payload.alertIndex, 
                    alertPersonName: action.payload.alertPersonName
            }
        }
        case actionTypes.DELETE_PERSON:

            const persons = state.persons.filter((res, index) => index !== action.index);
            return {
                ...state,
                persons: persons,
                alertDeletePerson: {
                    ...state.alertDeletePerson,
                    alertIndex: -1,
                    alertPersonName: null
                }
            }
        case actionTypes.TOGGEL_PERSON:
            return {
                ...state,
                showPersons: !state.showPersons
            }
        case actionTypes.HIDE_COCKPIT:
            return {
                ...state,
                showCockpit: false
            }
        case actionTypes.AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            }
        case actionTypes.HANDLE_NAME:
            const hPersons = [...state.persons];
            hPersons[action.payload.personIndex] = action.payload.personName;
            return {
                ...state,
                persons: hPersons,
            }
        default:
        return state
    }
}

export default reducer;
import * as actionTypes from './actionTypes';

export const alertDeletePerson = (aIndx, prsName) => {
    return {
        type: actionTypes.ALERT_DELETE_PERSON,
        payload: {
            alertIndex: aIndx, 
            alertPersonName: prsName
        }
    }
}

export const deletePerson = (prsIndx) => {
    return {
        type: actionTypes.DELETE_PERSON,
        index: prsIndx
    }
}

export const togglePerson = () => {
    return {
        type: actionTypes.TOGGEL_PERSON
    }
}

export const hideCockput = () => {
    return {
        type: actionTypes.HIDE_COCKPIT
    }
}

export const authenticated = () => {
    return {
        type: actionTypes.AUTHENTICATED
    }
}

export const handleName = (prsIndx, prsName) => {
    return {
        type: actionTypes.HANDLE_NAME,
        payload: {
            personIndex: prsIndx, 
            personName: prsName
        }
    }
}


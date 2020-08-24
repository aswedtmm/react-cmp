import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cmpPosts: [],
    error: false,
    name: '',
    comment: '',
    commentMsg: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEWS_PAYLOAD_SUCCESS:
            const response = action.result.data.splice(0, 3);
            return {
                ...state,
                cmpPosts: state.cmpPosts.concat(response)
            }
        case actionTypes.NEWS_PAYLOD_FAIL:
            return {
                ...state,
                error: true
            }
        case actionTypes.SET_COMMENT_NAME:
            return {
                ...state,
                name: action.name
            }
        case actionTypes.SET_COMMENT_BODY:
            return {
                ...state,
                comment: action.body
            }
        case actionTypes.COMMENT_POSTED:
            return {
                ...state,
                commentMsg: 'Comment posted',
                name: '',
                comment: ''
            }
        case actionTypes.COMMENT_POST_FAILED:
            return {
                ...state,
                commentMsg: 'Comment failed to post...',
                name: '',
                comment: ''
            }
        default:
            return state;
    }
}

export default reducer;
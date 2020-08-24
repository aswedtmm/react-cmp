import * as actionTypes from './actionTypes';
import { ApiOne } from '../../axios';

export const newsPayloadSuccess = (res) => {
    return {
        type: actionTypes.NEWS_PAYLOAD_SUCCESS,
        result: res
    }
}

export const newsPayloadFail = () => {
    return {
        type: actionTypes.NEWS_PAYLOD_FAIL    
    }
}

export const initNews = () => {
    return dispatch => {
        ApiOne.get('/posts').then(
            res => {
                dispatch(newsPayloadSuccess(res))
            }
        ).catch(
            err => {
                dispatch(newsPayloadFail())
            });
    }
    
}
export const setCommentName = (name) => {
    return {
        type: actionTypes.SET_COMMENT_NAME,
        name: name
    }
}

export const setCommentBody = (body) => {
    return {
        type: actionTypes.SET_COMMENT_BODY,
        body: body
    }
}

export const commentPosted = () => {
    return {
        type: actionTypes.COMMENT_POSTED
    }
} 

export const commentPostFailed = () => {
    return {
        type: actionTypes.COMMENT_POST_FAILED
    }
} 


export const submitComment = (payload) => {
    return dispatch => {
          ApiOne.post('/posts', payload).then(
            res => {
               dispatch(commentPosted());
            }
        )
        .catch(
             err => {
                dispatch(commentPostFailed())
            });
    }
}
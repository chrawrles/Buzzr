import axios from 'axios';

export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';
export const LOAD_QUESTIONS_SUCCESS = 'LOAD_QUESTIONS_SUCCESS';
export const LOAD_QUESTIONS_FAIL = 'LOAD_QUESTIONS_FAIL';

const initialState = {
    isLoading: false,
    isError: false,
    questions: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_QUESTIONS:
            return {
                ...state,
                isLoading: true,
                isError: false,
                questions: []
            }
        case LOAD_QUESTIONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                questions: action.payload.results
            }
        case LOAD_QUESTIONS_FAIL:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state;
    }
}

export const getQuestions = () => {
    return dispatch => {
        dispatch({
            type: LOAD_QUESTIONS
        });

        axios.get('https://opentdb.com/api.php?amount=5&type=multiple')
            .then((response) => {
                dispatch({
                    type: LOAD_QUESTIONS_SUCCESS,
                    payload: response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: LOAD_QUESTIONS_FAIL
                });
            });
    }
}
import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    getCategory: ["data"],
    getCategorySuccess: ["data"],
    getCategoryFailure: ["data"],
});

export const CategoryTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
    isFetching: false,
    error: null,
    isSuccess: false,
    data: null,
};

/* ------------- Reducers ------------- */
export const getCategory = (state = INITIAL_STATE) => ({
    ...state,
    isFetching: true,
});

export const getCategorySuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isFetching: false,
        isSuccess: true,
        data: action.data,
    };
};

export const getCategoryFailure = (state = INITIAL_STATE) => ({
    ...state,
    isFetching: false,
    isisSuccess: false,
    error: action.error,
});

/* ------------- Mapping ------------- */
export const HANDLERS = {
    [Types.GET_CATEGORY]: getCategory,
    [Types.GET_CATEGORY_SUCCESS]: getCategorySuccess,
    [Types.GET_CATEGORY_FAILURE]: getCategoryFailure,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);

import {checkUserDataThunkCreator} from "./AuthReducer";

const INITIALIZED_SUCCESS = "SN/APP/INITIALIZED_SUCCESS";

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializedTC = () => dispatch => {
    let promise = dispatch(checkUserDataThunkCreator());
    promise.then(() => dispatch(initializedSuccess()))
};

let initialState = {
    initialized: false,
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default: {
            return state;
        }
    }
};
export default AppReducer;
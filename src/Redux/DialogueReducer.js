const ADD_MESSAGE = 'SN/DIALOGUES/ADD_MESSAGE';

export const onClickAddMessageActionCreator = (message) => ({type: ADD_MESSAGE, message});

let initialState = {
    messages: [
        // { id: 1, message: 'text'},
    ],
};

const DialogueReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let stateCopy = {...state, messages: state.messages.map(item => ({...item})),};
            if (action.message !== '') {
                let newMessages = [...stateCopy.messages, {id: stateCopy.messages.length + 1, message: action.message}];
                stateCopy.messages = newMessages;
            }
            return stateCopy;
        }
        // case CHANGE_MESSAGE: {
        //     let stateCopy = { //let z =  cloneObject(state)
        //         ...state,
        //         newMessage: action.newMessage,
        //         messages: state.messages.map(item => ({...item})),
        //     };
        //     console.log(stateCopy.newMessage);
        //     // this._callback();
        //     return stateCopy;
        // }

        default: {
            return state;
        }
    }
};

export default DialogueReducer;
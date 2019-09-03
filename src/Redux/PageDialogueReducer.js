const cloneObject = obj => {
    let copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (let i = 0, len = obj.length; i < len; i++) {
            copy[i] = cloneObject(obj[i]);
        }
        return copy;
    }
    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (let item in obj) {
            if (obj.hasOwnProperty(item))
                copy[item] = cloneObject(obj[item]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
};

const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    newMessage: '',
    messages: [
        {
            id: 1,
            message: 'Одна из особенностей React — это то, как он предлагает думать о приложениях в процессе их создания.',
        },
        {
            id: 2,
            message: 'poiuyghjk в процессе их создания.',
        },
    ],
};

const PageDialogueReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE: {
            let stateCopy = { //let z =  cloneObject(state)
                ...state,
                newMessage: action.newMessage,
                messages: state.messages.map(item => ({...item})),
            };
            console.log(stateCopy.newMessage);
            // this._callback();
            return stateCopy;
        }
        case ADD_MESSAGE: {
            let stateCopy = { //let z =  cloneObject(state)
                ...state,
                messages: state.messages.map(item => ({...item})),
            };
            if (stateCopy.newMessage !== '') {
                let newMessage = {
                    id: stateCopy.messages.length + 1,
                    message: stateCopy.newMessage,
                };
                let newMessages = [...stateCopy.messages, newMessage];
                console.log(newMessages);
                stateCopy.messages = newMessages;
                stateCopy.newMessage = '';
                // this._callback();
            }
            return stateCopy;
        }
        default: {
            return state;
        }
    }
};

export const onChangeAddMessageActionCreator = textNewMessage => ({
    type: CHANGE_MESSAGE,
    newMessage: textNewMessage,
});

export const onClickAddMessageActionCreator = () => ({
    type: ADD_MESSAGE,
});

export default PageDialogueReducer;
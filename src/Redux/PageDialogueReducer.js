const CHANGE_MESSAGE = 'SN/DIALOGUES/CHANGE_MESSAGE';
const ADD_MESSAGE = 'SN/DIALOGUES/ADD_MESSAGE';

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
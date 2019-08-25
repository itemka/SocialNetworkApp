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
            state.newMessage = action.newMessage;
            console.log(state.newMessage);
            // this._callback();
            return state;
        }
        case ADD_MESSAGE: {
            if (state.newMessage !== '') {
                let newMessage = {
                    id: state.messages.length + 1,
                    message: state.newMessage,
                };
                let newMessages = [...state.messages, newMessage];
                console.log(newMessages);
                state.messages = newMessages;
                state.newMessage = '';
                // this._callback();
            }
            return state;
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
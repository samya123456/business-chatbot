// Config starter code
import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";
import Todos from './components/Todos/Todos.jsx';

const config = {
    initialMessages: [createChatBotMessage(`Hi`)],
    botName: "ServiceBot",
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />
    },
    customStyles: {
        // Overrides chatbot message styles
        botMessageBox: {
            backgroundColor: 'purple',
        },
        //Overrides chatbot button styles
        chatButton: {
            backgroundColor: "purple",
        },
    },

    //define the state of the app
    state: {
        todos: []
    },
    widgets: [
        {
            widgetName: "todos",
            //function that returns JSX element
            widgetFunc: (props) => <Todos {...props} />,
            // mapstatetoprops - tells chatbot which state to give to this custom component
            mapStateToProps: ['todos'],
        }
    ]
}

export default config
import React, { useEffect, useState } from "react";
import { getMessages } from "../api/chat.js";
import { MessageList } from "../components/MessageList.jsx";
import { MessageForm } from "../components/MessageForm.jsx";

export const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState("");

    const fetMessages = async () => {
        try {
            const response = await getMessages();
            setMessages(response);
        } catch (error) {
            console.log("Error al enviar el mensaje: ", error);
        }
    };

    useEffect(() => {
        setUsername(localStorage.getItem("chatUsername"));
        fetMessages();
        
        const interval = setInterval(() => {
            fetMessages();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="chat-container">
            <div className="chat-header">Chat de {username}</div>
            <div className="message-list-container">
                <MessageList messages={messages} />
            </div>
            <div className="message-form-container">
                <MessageForm onMessageSent={fetMessages} />
            </div>
        </div>
    );
}

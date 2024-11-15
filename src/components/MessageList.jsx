import React from 'react';


export const MessageList = ({ messages }) => {
    return (
        <>
            {messages?.map(message => (
                <div key={message.id} className="message-container">
                    <span className="message-author"><a href="https://www.flaticon.es/iconos-gratis/navidad" title="navidad iconos"></a>{message.author.name}:</span>
                    <span className="message-content"> {message.content}</span>
                </div>
            ))}
        </>
    );
}

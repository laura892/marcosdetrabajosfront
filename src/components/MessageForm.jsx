import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMesage } from "../api/chat.js";

export const MessageForm = ({ onMessageSent }) => {
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const username = localStorage.getItem("chatUsername");

        if (!username) {
            navigate("/");
        }
        if (content.trim()) {
            try {
                await createMesage(username, content);
                setContent("");
                onMessageSent();
            } catch (error) {
                console.log("Error al enviar el mensaje: ", error);
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="message-form">
            <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                rows={3}
                placeholder="ESCRIBE TU MENSAJE....."
                className="message-textarea"
            />
            <button type="submit" className="message-button">ENVIAR</button>
        </form>
    );
}

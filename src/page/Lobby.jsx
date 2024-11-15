import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Lobby = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem("chatUsername", username);
        navigate("/chat");
    }

    return (
        <div className="lobby-container">
            <h1 className="lobby-title">Lobby Chat</h1>
            <form onSubmit={handleSubmit} className="lobby-form">
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Escribe tu nombre de usuario"
                    required
                    className="lobby-input"
                />
                <button type="submit" className="lobby-button">Entrar</button>
            </form>
        </div>
    );
}

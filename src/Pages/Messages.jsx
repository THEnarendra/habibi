// src/pages/Messages.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Messages.css'; // Import custom styles

const initialMessages = [
    { id: 1, text: 'Kya Kr rha h 🥰', sender: 'You' },
    { id: 2, text: 'Kuch Nhi', sender: 'Her' },
    { id: 3, text: 'Gussa h??', sender: 'You' },
    { id: 4, text: 'Hmm Bhoott 😡', sender: 'Her' },
    { id: 5, text: 'Sorry 🥹', sender: 'You' },
    { id: 6, text: 'Mere Phone Ki wjah se Gussa mt hua kr', sender: 'You' },
    { id: 7, text: 'M bhi apna time apne ko hi dena chahta hu... pr wo sach m urgent tha', sender: 'You' },
    { id: 8, text: 'Abse Pkka kosis krunga aisa na ho 🥹', sender: 'You' },
    { id: 9, text: 'Kabhi hurt bhi nhi krunga 🥹', sender: 'You' },
    { id: 10, text: 'Dekhti hu 😏', sender: 'Her' },
    { id: 11, text: 'sun na', sender: 'You' },
    { id: 12, text: 'Hmm', sender: 'Her' },
    { id: 13, text: 'Love YOu ❤️', sender: 'You' },
    { id: 14, text: 'Hate YOu 💘', sender: 'Her' },
    { id: 15, text: 'Love YOu ❤️', sender: 'You' },
    { id: 16, text: 'Hate YOu 💘', sender: 'Her' },
    { id: 17, text: 'Love YOu ❤️', sender: 'You' },
    { id: 18, text: 'U too ❤️', sender: 'Her' },
    { id: 19, text: 'Promise kr choti choti batto pr gussa nhi hoga', sender: 'You' },
    { id: 20, text: 'm hoti hu gussa.... kam hi aise h tere 😡', sender: 'Her' },
    { id: 21, text: 'Nhi krunga ab 🥹', sender: 'You' },
    { id: 22, text: 'Ok ❤️', sender: 'Her' },
];

const Messages = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: 'You' }]);
            setNewMessage('');
        }
    };

    return (
        <Container className="messages-container">
            <h1>Messages</h1>
            <div className="messages-list">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`message ${message.sender === 'You' ? 'message-you' : 'message-her'}`}
                    >
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>
            <h2 className='text-center'>ab msg padhne ka itna hi shok h to tere pass saare pade h....</h2>
            <h1>padh lena 😊</h1>
            <p>M so rha hu ab 😉</p>
        </Container>
    );
};

export default Messages;

// src/pages/Timeline.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Timeline.css'; // Import custom styles

const timelineData = [
    { date: '21-05-2023', title: 'First Text', description: 'YOU: Hiii ME:  Hello ji.' },
    { date: '05-06-2023', title: 'First Meet', description: 'Olio RoofTop, Kanta.' },
    { date: '16-05-2023', title: 'Propose❤️', description: 'Sorry thoda pareshan kia ☺️' },
    { date: '09-06-2023', title: 'Hamesha Yad Rahega 🥰', description: 'Words nhi h.' },
    // Add more milestones as needed
];

const Timeline = () => {
    return (
        <Container className="timeline-container">
            <h1>Our Journey</h1>
            <h2 className='text-center'>11th ka to yad nhi😅</h2>
            <div className="timeline">
                {timelineData.map((event, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-date">{event.date}</div>
                        <div className="timeline-content">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
                <h2 className='text-center'>Btane ko or bhi bahut kuch h pr neend aa rhi h😅</h2>
            </div>
        </Container>
    );
};

export default Timeline;

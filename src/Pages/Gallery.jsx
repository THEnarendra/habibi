// src/pages/Gallery.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Gallery.css'; // Import custom styles

// Import images
import youImages from '../images/youImages'; // Assuming images are organized in a folder
import usImages from '../images/usImages';   // Assuming images are organized in a folder

const Gallery = () => {
    return (
        <Container className="gallery-container">
            <section className="gallery-section">
                <h2>You</h2>
                <Row>
                    {youImages.map((image, index) => (
                        <Col md={4} sm={6} xs={12} key={index} className="gallery-item">
                            <img src={image} alt={`You ${index + 1}`} className="gallery-image" />
                        </Col>
                    ))}
                </Row>
            </section>
            
            <section className="gallery-section">
                <h2>Us</h2>
                <Row>
                    {usImages.map((image, index) => (
                        <Col md={4} sm={6} xs={12} key={index} className="gallery-item">
                            <img src={image} alt={`Us ${index + 1}`} className="gallery-image" />
                        </Col>
                    ))}
                </Row>
            </section>
        </Container>
    );
};

export default Gallery;

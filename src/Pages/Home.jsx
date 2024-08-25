// src/pages/Home.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';
import homeImg from '../images/whatsappss.png'

const Home = () => {
    return (
        <Container className="home-container">
            <Row className="align-items-center">
                <Col md={12} className="text-center">
                    <h1 style={{color:"#990012"}}>HABIBI🥰</h1>
                    <h2>Jaldbazi m yahi bana h!!😊</h2>
                    <p>
                        Mujhe Pta h message Dekhne ka time nhi mila hoga
                    </p>
                    <img className='home-img' src={homeImg} alt="" />
                    {/* <Button variant="primary" href="/gallery">View Gallery</Button> */}
                    <br />
                    <p>Is page pr itna hi h..🤗</p>
                    <p>Right m upr dekh uspr click kr</p>
                    <p>Rukk Rukk neeche dekh👇</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;

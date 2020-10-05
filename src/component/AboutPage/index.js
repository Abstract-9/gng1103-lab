import React from 'react'

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import leo from './leo.jpg';
import jfk from './JFK_transparent.webp'
import among from './among.jpg'

class AboutPage extends React.Component {
    render() {
        return (
            <div className={'highlight'}>
                <Jumbotron>
                    <h1>We Are JAMZ Delivery</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus libero, tempus lacinia faucibus eget, aliquam nec erat. Fusce eu euismod ex. Suspendisse neque nulla, finibus sit amet pulvinar non, suscipit eget lorem. Donec tincidunt odio ante, id congue ante rutrum in. In at accumsan nisi, at ullamcorper nisl. Nam tristique et urna sed ornare. Nullam semper leo finibus eros tincidunt dictum. Cras bibendum, nulla eget porta tempus, quam dui pulvinar nisl, consectetur vehicula odio ex a turpis. Aenean ac dui magna. Etiam interdum sem elit, sed ultrices ex porttitor a.</p>
                </Jumbotron>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col>
                            <Image className="w-75 h-75" src={leo} roundedCircle />
                            <p>Logan - Software Lead</p>
                        </Col>
                        <Col>
                            <Image className="w-75 h-75" src={among} roundedCircle />
                            <p>Moh - Drone Engineer</p>
                        </Col>
                        <Col>
                            <Image className="w-75 h-75" src={jfk} roundedCircle />
                            <p>Piers - Drone Engineer</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutPage;
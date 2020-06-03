import React from 'react';
import {CardGroup, Card, Row, Col} from 'react-bootstrap';
import items from '../data/fantasy.json';

class LatestRealease extends React.Component {
    render() {
        return (
            <Row className="mx-0 pb-3">
                {items.map((item) => {
                    return (
                        <Col className="col-md-3 py-3">
                            <Card  src={item.img} style={{width: 15 + 'rem', height: 30 + 'rem'}}>
                                <Card.Img className="img-fluid" key={item.asin} variant="top" src={item.img} style={{width: 15 + 'rem', height: 15 + 'rem'}}/>
                                <Card.Body >
                                    <Card.Title>{item.title}</Card.Title>
                                </Card.Body>
                            </Card> 
                        </Col>
                    );
                })}
                
            </Row>
        )
    }
}

export default LatestRealease;

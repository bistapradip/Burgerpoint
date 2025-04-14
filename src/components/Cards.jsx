import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Cards({ image, rating, title, paragraph, price }) {
    return (
            <Col sm={6} lg={4} xl={3} className="mb-4">
                <Card className="overflow-hidden">
                    <div className="overflow-hidden">
                        <Card.Img variant="top" src={image} />
                    </div>
                    <Card.Body>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="item_rating">{rating}</div>
                            <div className="wishlist">
                                <div>
                                    <i className="bi bi-heart"></i>
                                </div>
                            </div>
                        </div>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {paragraph}
                        </Card.Text>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='menu_price'>
                                <h5 className='mb-0'>Rs {price}</h5>
                            </div>
                            <div className='add_to_cart'>
                                <Link to="/">
                                <i className="bi bi-bag me-2"></i>
                                Add to Cart
                                </Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
    );
}

export default Cards

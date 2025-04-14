import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

const mockData = [
        {
          image: Pizza,
          title: "Original",
          paragraph: "A juicy grilled beef patty topped with cheddar cheese, lettuce, tomato, and our house special sauce."
        },
        {
            image: Salad,
            title: "Quality Food",
            paragraph: "A juicy grilled beef patty topped with cheddar cheese, lettuce, tomato, and our house special sauce."
        },

        {
            image: Delivery,
            title: "Delivery",
            paragraph: "A juicy grilled beef patty topped with cheddar cheese, lettuce, tomato, and our house special sauce."
        },

]
function Section2() {
  return (
    <>
    <section className='about_section'>
        <Container>
            <Row>
                <Col lg={{span:8, offset:2}} className='text-center'>
                <h2>The burger tastes is great</h2>
                <p>
                    Lorem, lor, odio voluerferendis autem. Molestias, neque!
                </p>
                <Link to="/" className='btn btn-danger'>
                 Expore Our Full Menu
                </Link>
                </Col>
            </Row>
        </Container>
      </section>
      <section className='about_wrapper'>
        <Container>
            <Row className='justify-content-md-center'>
                {mockData.map((cardData, index)=> (
                    <Col md={6} lg={4} className='mb-4 mb-md-4' key={index}>
                        <div className='about_box text-center'>
                            <div className='about_icon'>
                                <img src={cardData.image} className='img-fluid' alt="icon"/>
                            </div>
                            <h4>{cardData.title}</h4>
                            <p>{cardData.paragraph}</p>
                        </div>
                    </Col>
                ) )}
            </Row>
        </Container>
      </section>
    </>
      

  )
}

export default Section2

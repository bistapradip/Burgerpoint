import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Burger from "../../assets/hero/hero-2.png"
import { Link } from 'react-router-dom'
function Section() {
  return (
    <div>
      <section className='hero_section'>
        <Container>
            <Row>
                <Col lg= {7} className='mb-5 mb-lg-0'>
                    <div className='position-relative'>
                        <img src={Burger} className='img-fluid' alt='Hero' />
                    </div>
                    <div className='price_badge'>
                        <div className='badge_text'>
                            <h4 className='h4_xs'>Only</h4>
                            <h4 className='h3_lg'>Rs 170</h4>
                        </div>
                    </div>
                </Col>
                <Col>
                <div className='hero_text text-center'>
                    <h1 className='text-white'>New Burger</h1>
                    <h2 className='text-white pt-2 pb-4'>With Onion</h2>
                    <p className='text-white pt-2 pb-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ut iste accusantium, rerum molestiae doloribus odit, ullam 
                        est laborum illum animi esse eligendi soluta eaque recusandae dolorum
                        velit dolorem veniam corporis!
                    </p> 
                    <Link to="/" className='btn order_now'>
                        Order Now
                    </Link>
                </div>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Section

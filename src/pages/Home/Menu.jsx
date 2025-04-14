import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Image1 from "../../assets/menu/burger-11.jpg"
import Image2 from "../../assets/menu/burger-12.jpg"
import Image3 from "../../assets/menu/burger-13.jpg"
import Image4 from "../../assets/menu/burger-14.jpg"
import Image5 from "../../assets/menu/burger-15.jpg"
import Image6 from "../../assets/menu/burger-16.jpg"
import Image7 from "../../assets/menu/burger-17.jpg"
import Image8 from "../../assets/menu/burger-18.jpg"
import Cards from '../../components/Cards'
import { Link } from 'react-router-dom'

const mockData = [
    {
      id: 1,
      image: Image1,
      title: "Classic Burger",
      paragraph: "A juicy beef patty with lettuce, tomato, onions, special sauce.",
      rating: 4.5,
      price: 450
    },
    {
      id: 2,
      image: Image2,
      title: "Cheese Burger",
      paragraph: "Melted cheddar cheese on a grilled chicken with veggies.",
      rating: 4.7,
      price: 500
    },
    {
      id: 3,
      image: Image4,
      title: "Crispy Chicken Burger",
      paragraph: "Golden fried chicken breast with mayo, lettuce, and pickles.",
      rating: 4.6,
      price: 420
    },
    {
      id: 4,
      image: Image5,
      title: "Veggie Delight",
      paragraph: "A healthy mix of grilled veggies and paneer with tangy sauces.",
      rating: 4.3,
      price: 380
    },
    {
      id: 5,
      image: Image6,
      title: "Spicy Volcano Burger",
      paragraph: "Double patty burger with jalapeños, spicy mayo, and hot sauce.",
      rating: 4.8,
      price: 550
    },
    {
      id: 6,
      image: Image7,
      title: "BBQ Bacon Burger",
      paragraph: "Smoky BBQ sauce, crispy bacon, and cheese stacked on a beef patty.",
      rating: 4.9,
      price: 600
    },
    {
      id: 7,
      image: Image8,
      title: "Mushroom Melt Burger",
      paragraph: "Sauteed mushrooms, swiss cheese, and creamy garlic sauce.",
      rating: 4.4,
      price: 490
    },
    {
      id: 8,
      image: Image3,
      title: "Double Decker Beast",
      paragraph: "Two beef patties, cheese, bacon, and all the fixings in a towering bun.",
      rating: 4.9,
      price: 650
    }
  ]
  


function Menu() {
  return (
    <section className='menu_section'>
        <Container>
            <Row>
                <Col lg={{span:8, offset:2}}>
                <h2>Our Crazy Burger</h2>
                <p className='para'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima 
                    ius, sed quam impedit dolorem doloremque nobis est non deleniti,
                    consequuntur modi temporibus assumenda similique quasi!
                </p>
                </Col>
            </Row>
            <Row className=''>
                {mockData.map((cardData, index)=> (
                    <Cards
                    key={index}
                    image={cardData.image}
                    rating={cardData.rating}
                    title={cardData.title}
                    paragraph={cardData.paragraph}
                    price={cardData.price}
                    // renderRatingIcons={renderRatingIcons}></Cards>
                />)
            )}
            </Row>
            <Row className='pt-5'>
                <Col sm={6} lg={5}>
                <div className='ads_box ad_img1 mb-5 mb-md-0'>
                    <h4 className='mb-0'>GET YOUR FREE</h4>
                    <h5>CHEESE FRIES</h5>
                    <Link to="/" className='btn btn-danger'>
                        Learn More
                    </Link>
                </div>
                </Col>

                <Col sm={6} lg={5}>
                <div className='ads_box ad_img1 mb-5 mb-md-0'>
                    <h4 className='mb-0'>GET YOUR FREE</h4>
                    <h5>CHEESE FRIES</h5>
                    <Link to="/" className='btn btn-danger'>
                        Learn More
                    </Link>
                </div>
                </Col>        
            </Row>
        </Container>

    </section>
  )
}

export default Menu

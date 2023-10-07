import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Home() {
  const [restaurants, setRestaurants] = useState([])

  // const getAllRestaurnt=()=>{
  //   axios.get('/restaurants.json').then(result=>{
  //     console.log(result.data.restaurants);
  //   })
  const getAllRestaurnt = async () => {
    const result = await axios.get(`/restaurants.json`)
    // console.log(result.data.restaurants);
    setRestaurants(result.data.restaurants);
  }

  useEffect(() => {
    getAllRestaurnt()
  }, [])
  console.log(restaurants);

  return (
    <div>
      <Row>
        
        <div style={{ 
      backgroundImage: `url("https://i.postimg.cc/QNB1nrHn/e67109346f8ca2c9827a0ab6b2f389b8.jpg")` ,
       backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }}>
      
          <Col lg={6} className='p-5 ms-5'>
            <h1><b className='text-warning'>Indulge in Culinary Excellence at Le Café Restaurant </b></h1>

            <p className='m-3 test-start w-100'>Le Café Restaurant offers a delightful culinary experience in the heart of the city. Our restaurant is a haven for food enthusiasts, serving a diverse menu of delectable dishes prepared with the finest ingredients. Whether you're seeking a cozy breakfast, a quick lunch, or a memorable dinner, Le Café's warm and inviting ambiance, combined with attentive service, creates the perfect setting for a memorable dining experience. Join us and savor the flavors that make every visit to Le Café a treat for the senses.</p>
          </Col>
        </div > 
    
       
      </Row>
      <hr />   
        <Container>
          <Row>
            {
              restaurants.length > 0 ? restaurants.map(i =>
               <Col xs={6} lg={4} md={4}>
                  <Link to={`/view/${i.id}`} style={{textDecoration:'none'}}>
                    <Card style={{ width: '100%',height:'550px' }} className='m-4'>
                      <Card.Img style={{height:'400px'}} variant="top" src={i.photograph} />
                      <Card.Body>
                        <Card.Title>{i.name}</Card.Title>
                        <Card.Text>
                          <b>Address:</b>{i.address}
                        </Card.Text>
    
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
  
  
              ) : <h1>No Data Present </h1>
            }
            </Row>
        </Container>
          </div>
       
  )
  }
  export default Home
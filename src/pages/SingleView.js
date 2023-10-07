import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Reviews from '../components/Reviews'
import Operating from '../components/Operating'




function SingleView() {
  const param=useParams()
  // const id=param.id
  var {id}=param //destructuring
  useEffect(()=>{

  },[])
  // console.log(id);
  const [allRestaurants, setRestaurants] = useState([])

 
  const getAllRestaurnt = async () => {
    const result = await axios.get(`/restaurants.json`)
    // console.log(result.data.restaurants);
    setRestaurants(result.data.restaurants);
  }

  useEffect(() => {
    getAllRestaurnt()
  }, [])
  const singleRest=allRestaurants.find(i=>i.id==id)
  console.log(singleRest);
  
  // console.log(allRestaurants);
  return (
    <div>
      {singleRest?
      <Row>
        <Col lg={5} sm={12} md={6} className='py-5 ps-5 ms-5 mt-5 mb-5'>
        <img style={{height:'700px',width:'60%'}} src={singleRest.photograph} alt="" />
        </Col>
         <Col className='text-start'>
         <h1 className='text center mt-3'>{singleRest.name}</h1>
           <ListGroup>
        <ListGroup.Item ><b className='text-warning'>Address: </b>{singleRest.address} </ListGroup.Item>
        <ListGroup.Item><b className='text-warning'>Cuisine type:</b>{singleRest.cuisine_type}</ListGroup.Item>
        <ListGroup.Item><b className='text-warning'>Neighborhood:</b>{singleRest.neighborhood}</ListGroup.Item>
        <ListGroup.Item ><Operating operatingData={singleRest.operating_hours}></Operating> </ListGroup.Item>
        <ListGroup.Item ><Reviews reviews={singleRest.reviews}></Reviews> </ListGroup.Item>
        
        
      </ListGroup>
         </Col>
      </Row>
      :
      <Row><h1>No data </h1></Row>
      }
    </div>
  )
}

export default SingleView
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Reviews({reviews}) {
  return (
    <div>
         <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Reviews</Accordion.Header>
        <Accordion.Body>
          {
            reviews?reviews.map(i=>(
                <div>
                    <p><b className='text-warning'>Name: </b>{i.name}</p>
                    <p><b className='text-warning'>Date: </b>{i.date}</p>
                    <p><b className='text-warning'>Rating: </b>{i.rating}</p>
                    <p><b className='text-warning'>Comments: </b>{i.comments}</p>
                </div>
            )
                ):<h1>No Data</h1>
          }
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
    </div>
  )
}

export default Reviews
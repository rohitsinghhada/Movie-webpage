import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './card.css';
function Mycard() {
  const[ response ,setResponse]= useState([]);
  

  function handleClick() {
    axios.get("https://www.omdbapi.com/?apikey=4e9e8ed7&s=series").then((response) => {
      setResponse(()=>response.data.Search);
    });
  }
  console.log(response)

  useEffect(()=>handleClick()
  ,[])



  return (
    <>

     <Row className="justify-content-center g-3 ">
       { response.map((movie) =>(  
          <Col lg="3" className='justify-content-center'>
             <Card className='crd' key={movie.imdbID}>
            <Card.Img className='poster' variant="top" src={movie.Poster} />
            <Card.Title className='text-center' >{movie.Title}</Card.Title>
            </Card>
          </Col>    
        
       )
       )

       }
  
    </Row>


     
    </>
  );
}

export default Mycard;
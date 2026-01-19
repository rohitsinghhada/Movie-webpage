import './Home.css'
import Navbar1 from "../components/Navbar";
import Mycards from "../components/Mycards"
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Home() {
  return (
    <>

      <div className="bgimg">
        <div className="overlay">
         <Navbar1 /><br/><br/>
          <h1 className="title">Movies Released in 2024 </h1>
          <Row className="slct"> 
              <Form.Group as={Col} controlId="formGridState">
              <Form.Label style={{color:"white" , fontSize:"20px"}}>Select Year</Form.Label>
              <Form.Select defaultValue="2025">
                 <option>2024</option>
                 <option>2023</option>
                 <option>2022</option>
                 <option>2021</option>
                 <option>2020</option>
                 <option>2019</option>
                 <option>2018</option>
                 <option>2017</option>
                 
              </Form.Select>
              </Form.Group>
          </Row>
           
           
            <Mycards /> 
        </div>
      </div>
    </>
  );
}
export default Home;

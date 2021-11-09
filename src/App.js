import logo from './logo.svg';
import React from "react";
import './App.css';
import { Form,Button,FloatingLabel,Row ,Col,Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logoForm from './assets/pngegg.png';




 function App() {
   return (
    <div className="App">
       <Card className="text-center">
   <Card.Body>
     <img src={logoForm} alt="Logo" width="50px" />
 <h1/>Contact Us
      <Form>
  <Row>
    <Col>
      <Form.Control required type="text" placeholder="First name" />
    </Col>
    <Col>
      <Form.Control required type="text" placeholder="Last name" />
    </Col>
  </Row>

<br/>
  <>
  <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control required type="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control  required type="password" placeholder="Password" />
  </FloatingLabel>
</>
<br/>
{['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Male"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="Female"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
    </div>
  ))}
  <br/>
   <Button variant="outline-primary" type="submit">Submit</Button>{' '}
   <Button variant="outline-danger">Cancel</Button>{' '}
</Form>
  </Card.Body> 
  
</Card>
    </div>
    )
    }
export default App;

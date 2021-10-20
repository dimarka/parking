import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container  from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
function App() {

  const [value,setValue]= useState("");
  const [placas, setPlaca]= useState([]);


  
  const handleChange = (event) =>{
    setValue(event.target.value)
  }

  const handleClick = ()=>{
    const fecha = new Date().toLocaleString();
    if(value.length !== 7){
      alert("no es una placa de carro")
    }else{
      setPlaca([...placas,{placa:value,fecha:fecha}])
    }
    console.log(placas)
    
  }
 /*const time= new Date().toLocaleString();*/

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
    <Col xs={6}>
    <Form>
    <Form.Group className="mb-3" >
      <Form.Label>{}</Form.Label>
      <Form.Control type="text" onChange={handleChange} />
      <Form.Text className="text-muted">
        {value}
      </Form.Text>
      <Button onClick={handleClick} className="float-end mt-3" type="button">Guardar
      </Button>
    </Form.Group>

  </Form>
 
  </Col>
  </Row>
  <Row className="d-flex justify-content-center align-items-center mt-3">
    <Col xs={6}>
    <ListGroup>
    {placas.map((placa)=>{
      return (<ListGroup.Item>{placa.placa} {placa.fecha}</ListGroup.Item>)
    })}

    </ListGroup>
    </Col>
    </Row>
  </Container>
  );
}

export default App

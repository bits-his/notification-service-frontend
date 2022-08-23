import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Input, Label, Row, } from "reactstrap";
// import "./sign.css"


export default function EnterFace() {
  const navigate = useNavigate()
  return (
    <div className="body">
      <Container className='p-5 m-5'>
        <Card>
          <div>
            <p className="text-center display-5"> <span className='text-primary'>Welcome to</span></p>
            <hr className="shadow" />
            <p className="text-center" style={{ fontSize: 30, }}>Continue as</p>
            <Row className='text-center'>
              <Col md="12">
                <Button color='primary'
                  size='lg'
                  className='btn-block mb-1 px-5'
                  onClick={() => navigate("/Welcome")}
                >
                  PASSENGER
                </Button>
              </Col>
              <p className="text-center mt-1">OR</p>
              <Col md="12">
                <Button color='primary'
                  size='lg'
                  className='btn-block mb-1 px-5'
                  onClick={() => navigate("/View")}
                >
                  DRIVER
                </Button>
              </Col>
            </Row>

          </div>
        </Card>
      </Container>
    </div>
  )
}

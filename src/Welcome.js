import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row } from 'reactstrap'

export default function Welcome() {
    return (
        <div>
            <Container className='mt-3'>
                <Card>

                    <CardHeader
                        className='text-center'
                    >
                        welcome Provide Ride Information
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={6}>
                                <Label>From</Label>
                                <Input type='text' />
                            </Col>

                            <Col md={6}>
                                <Label>To</Label>
                                <Input type='text' />
                            </Col>
                        </Row>
                        <center>
                            <Button className='mt-3' color='primary'>
                                Send Request
                            </Button>
                        </center>

                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}

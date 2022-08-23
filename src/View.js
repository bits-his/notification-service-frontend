import React from 'react'
import { Container, CardHeader, CardBody, Card, Button, Table, Row } from "reactstrap"


export default function View() {
  return (
    <div>
      <Container className="mt-3">
        <Card>
          <center>
            <CardHeader>
              Appointment
            </CardHeader>
          </center>
          <CardBody>
            <Row className="mt-4">

              <Table className="mt-4 table table-bordered">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Action</th>
                  </tr>
                </thead>
              </Table>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </div>
  )
}

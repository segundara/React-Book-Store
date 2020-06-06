import React from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'


class AddComment extends React.Component {
  state = {
      //select: this.props.selectedBook,
    reservation: {
        comment: '',
        rate: 1,
        elementId: ''
    }
  }

  submitReservation = async e => {
    e.preventDefault();

    const url = "https://striveschool.herokuapp.com/api/comments/";

        const username = 'user24';
        const password = '48D4vaVh6Ra3DD8w';

        const headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));

    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(this.state.reservation),
        headers: headers,
      })
      if (response.ok) {
        alert('Comment saved!')
        this.setState({
          reservation: {
            comment: '',
            rate: 1,
            elementId: ''
          }
        })
      } else {
        let json = await response.json()
        alert(json)
      }
    } catch (e) {
      console.log(e)
    }
  }

  updateReservationField = event => {
    // console.log('event', event)
    let reservation = this.state.reservation
    let currentId = event.currentTarget.id
    console.log(currentId)

    if (currentId === 'elementId'){
      reservation[currentId] = this.props.selectedBook.asin
      console.log(this.props.selectedBook.asin)
    }
    else reservation[currentId] = event.currentTarget.value

    //reservation[currentId] = event.currentTarget.value

    this.setState({ reservation: reservation })
  }

  render() {
    return (
      <>
      {this.props.selectedBook && (
      <div className="mt-5 mb-5">
        <h3>Give comments!</h3>
        <Form onSubmit={this.submitReservation}>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="elementId">Book Id</Form.Label>
                <Form.Control
                  type="text"
                  name="elementId"
                  id="elementId"
                  placeholder="Tap any key to show book-ID here!"
                  value={this.state.reservation.elementId}
                  onChange={this.updateReservationField}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="comment">Comment</Form.Label>
                <Form.Control
                  type="text"
                  name="comment"
                  id="comment"
                  placeholder="Your comment"
                  value={this.state.reservation.comment}
                  onChange={this.updateReservationField}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              <Form.Group>
                <Form.Label htmlFor="rate">
                  Rate
              </Form.Label>
                <Form.Control
                  as="select"
                  name="rate"
                  id="rate"
                  value={this.state.reservation.rate}
                  onChange={this.updateReservationField}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
      )}
      {!this.props.selectedBook &&(
        <></>
      )}
      </>
    )
  }
}

export default AddComment
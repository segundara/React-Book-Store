import React from 'react'
import { Form, Row, Col, Button} from 'react-bootstrap'
import StarRatings from 'react-star-ratings';
import {
  Modal,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import CommentList from "./CommentList";


class AddComment extends React.Component {
  state = {
      //selected: false,
    commentObj: {
        comment: '',
        rate: 1,
        elementId: this.props.selectedBook
    }
    
  }


  saveComment = async e => {
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
        body: JSON.stringify(this.state.commentObj),
        headers: headers,
      })
      if (response.ok) {
        alert('Comment saved!')
        this.setState({
          commentObj: {
            comment: '',
            rate: 1,
            elementId: this.props.selectedBook
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

  updateCommentField = event => {
    let commentObj = this.state.commentObj
    let currentId = event.currentTarget.id
    console.log(currentId)

    if (currentId === 'elementId'){
      commentObj[currentId] = this.props.selectedBook
    }
    else commentObj[currentId] = event.currentTarget.value

    //commentObj[currentId] = event.currentTarget.value

    this.setState({ commentObj: commentObj })
  }


  render() {
    return (
      <>
      {this.props.selectedBook && (
      <div className="mt-5 mb-5">
        <h5>Add more comments with the Form below!</h5>
        <Form onSubmit={this.saveComment}>
          <Row>
            <Col md={0}>
              <Form.Group>
                {/* <Form.Label htmlFor="elementId">Book Id</Form.Label> */}
                <Form.Control
                  type="hidden"
                  name="elementId"
                  id="elementId"
                  placeholder=""
                  value={this.state.commentObj.elementId}
                  onChange={this.updateCommentField}
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
                  value={this.state.commentObj.comment}
                  onChange={this.updateCommentField}
                />
              </Form.Group>
            </Col>
          {/* </Row>
          <Row> */}
            <Col md={5}>
              <Form.Group>
                <Form.Label htmlFor="rate">
                  Rate
              </Form.Label>
                <Form.Control
                  as="select"
                  name="rate"
                  id="rate"
                  value={this.state.commentObj.rate}
                  onChange={this.updateCommentField}
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
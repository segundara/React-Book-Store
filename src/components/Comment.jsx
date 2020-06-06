import React from "react";
import { Container, ListGroup, Alert, Badge, Col, Button } from "react-bootstrap";

const Comment = ({selectedBook}) => {
    return (
        <Container>
            {selectedBook && (
            <ListGroup className="mt-5">                
                <ListGroup.Item>
                  {selectedBook.comment}
                  <Badge pill variant="primary" className="ml-3">
                    {selectedBook.rate}
                  </Badge>
                </ListGroup.Item>
            </ListGroup>
            )}
            {!selectedBook && (
            <Alert variant="secondary" className="mt-5">
                No book selected, please click on a book to show the comments
            </Alert>
            )}
      </Container>
    )
}

export default Comment;
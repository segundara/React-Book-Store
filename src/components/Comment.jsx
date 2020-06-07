import React from "react";
import { Container, ListGroup, Alert, Badge} from "react-bootstrap";

const Comment = ({selectedBook}) => {

  let variant = "";
              switch (selectedBook.rate) {
                case 1:
                  variant = "danger";
                  break;
                case 2:
                  variant = "warning";
                  break;
                case 3:
                  variant = "secondary";
                  break;
                default:
                  variant = "success";
                  break;
              }

    return (
        <Container>
            {selectedBook && (
            <ListGroup className="mt-5">                
                <ListGroup.Item>
                  {selectedBook.comment}
                  <Badge pill variant={variant} className="ml-3">
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
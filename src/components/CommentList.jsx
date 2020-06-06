import React from 'react';
import {Row, Dropdown, DropdownButton, FormControl, InputGroup} from 'react-bootstrap';
import { Container, ListGroup, Alert, Badge, Col, Button } from "react-bootstrap";
//import SingleBook from './SingleBook'
import Comment from './Comment';
import AddComment from './AddComment';

class CommentList extends React.Component {
    state = {
        selected: '',
        commentss: [],
        selectedComment: {}
    }
    
    componentWillReceiveProps = async ({selectedBook}) => {

        if (selectedBook !== this.state.selected){
        
        const url = "https://striveschool.herokuapp.com/api/comments/"+selectedBook.asin;
    

        const username = 'user24';
        const password = '48D4vaVh6Ra3DD8w';

        const headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));

            try{ 
                let response = await fetch(url, {
                method: "GET",
                headers: headers,
                });
                let comments = await response.json()
                console.log('Comments are ', comments)
                console.log(url)
                this.setState({
                    commentss: comments
                })
                console.log(this.state.commentss)
            }
            catch (err){
                console.log(err)
            }
    }
}
    
    deleteComment = async ({comment}) => {
        let id = ''
        this.state.commentss.map((a)=>{
            if (a._id === comment._id){
                return id += a._id
            }
        })
        console.log(id)

        const url = "https://striveschool.herokuapp.com/api/comments/";
    

        const username = 'user24';
        const password = '48D4vaVh6Ra3DD8w';

        const headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));

        let response = await fetch(url + id, {
        method: "DELETE",
        headers: headers,
        });
        return response;
    };


    render(){
    return (
        <Container>
            {this.props.selectedBook && (
                <>
                {this.state.commentss.map((comment,i)=>{
                    return (    
                        <>      
                        <Comment key={i}
                            selectedBook={comment} 
                        />
                        <Button variant="danger" onClick={() => this.deleteComment({comment})}>Delete</Button>
                        </>
                    );
                })}
                <Row>
                    <Col xs={12}>
                        <AddComment selectedBook={this.props.selectedBook}/>
                    </Col>
                </Row>
                </>
            )}
            {!this.props.selectedBook && (
            <Alert variant="secondary" className="mt-5">
                No book selected, please click on a book to show comments and to add new comment
            </Alert>
            )}
      </Container>
    )
    }
}

export default CommentList;
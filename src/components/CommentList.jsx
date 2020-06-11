import React from 'react';
import {Row, Dropdown, DropdownButton, FormControl, InputGroup} from 'react-bootstrap';
import { Container, ListGroup, Alert, Badge, Col, Button } from "react-bootstrap";
//import SingleBook from './SingleBook'
import Comment from './Comment';
import AddComment from './AddComment';
// import { usePromiseTracker } from "react-promise-tracker";
// import { trackPromise } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

class CommentList extends React.Component {
    state = {
        selected: '',
        commentss: [],
        //selectedComment: {},
        selectedBook: this.props.selectedBook,
        loading: false,
        err: ''
    }

    LoadingIndicator = () => {
        return(
        <div
            style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}
            >
            <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
        </div>
    )};

    LoadingError = () => {
        return(
        <Alert variant="danger" className="my-5">
            Ooops!!! Sorry this is not working at the moment. Please try again later!
        </Alert>
    )};
    
    showComments = () => {
        return(
            <>
            <FormControl
            placeholder='filter comments here'
            aria-label='search'
            aria-describedby='basic-addon1'
            onChange={(e) => this.handleFilterQuery(e.target.value)}
            />
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
                <Col xs={12} >
                    <AddComment selectedBook={this.props.selectedBook}/>
                </Col>
            </Row>
            </>
        )
    }

    
    componentDidMount = async () => {
        console.log(this.props.selectedBook)
          const url =
            "https://striveschool.herokuapp.com/api/comments/" +
            this.props.selectedBook;
          const username = "user24";
          const password = "48D4vaVh6Ra3DD8w";
          const headers = new Headers();
          headers.append("Content-Type", "application/json");
          headers.append(
            "Authorization",
            "Basic " + btoa(username + ":" + password)
          );
          
          this.setState({ loading: true }, async () => {
          try {
            let response = await fetch(url, {
              method: "GET",
              headers: headers,
            });
            let comments = await response.json();
            console.log("Comments are ", comments);
            console.log(url);
            this.setState({
              commentss: comments,
              loading: false
            });
            console.log(this.state.commentss);
          } catch (err) {
            console.log(err);
            this.setState({
                err: err,
                commentss: [],
                loading: false
              });
          }
        })
      };

    
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

    handleFilterQuery = (filterQuery) => {
        let d_comments = this.state.commentss

        if (filterQuery) {
            let filteredComment =d_comments.filter((a) => 
            a.comment.toLowerCase().includes(filterQuery.toLowerCase()) 
            || 
            a.author.toLowerCase().includes(filterQuery.toLowerCase()));

            this.setState({commentss: filteredComment});
        }
        else {
            this.setState({commentss: d_comments});
        }
    }

    render(){
    return (
        <Container>
            {this.props.selectedBook && this.state.loading &&(
                this.LoadingIndicator()
            )}
            {this.props.selectedBook && !this.state.loading &&(
                <>
                {this.state.commentss && !this.state.err &&(
                    this.showComments()
                )}
                {this.state.err && (
                    this.LoadingError()
                )}
                </>
            )}
            {/* {!this.props.selectedBook && (
            <Alert variant="info" className="my-5">
                Please click on a book to show comments and to add new comment
            </Alert>
            )} */}
      </Container>
    )
    }
}

export default CommentList;
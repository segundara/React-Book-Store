import React from 'react';
import {Card, Row, Col, Dropdown, DropdownButton, FormControl, InputGroup} from 'react-bootstrap';
import CommentList from './CommentList';
// import Comment from './Comment';
// import AddComment from './AddComment';

let books = {
    fantasy: require('../data/fantasy.json'),
    history: require('../data/history.json'),
    horror: require('../data/horror.json'),
    romance: require('../data/romance.json'),
    scifi: require('../data/scifi.json'),
}

let bookCategories = ['fantasy','history','horror','romance','scifi']

class LatestRealease extends React.Component {
    state = {
        books: books.fantasy.slice(0, 10),
        categorySelected: '',
        selectedBook: null,
    };

    showBookComment = (book) => {
        this.setState({selectedBook: book});
    };

    handleDropdownChange = (category) => {
        this.setState({books: books[category].slice(0,10), categorySelected: category});
    };

    handleSearchQuery = (searchQuery) => {
        let category = this.state.categorySelected;

        if (searchQuery) {
            let filteredbooks =books[category].filter((book) => 
            book.title.toLowerCase().includes(searchQuery.toLowerCase()));

            this.setState({books: filteredbooks.slice(0,10)});
        }
        else {
            this.setState({books: books[category].slice(0,10)});
        }
    }

    render() {
        return (
            <>
            <InputGroup>
            <DropdownButton
                id='dropdown-basic-button'
                className='mb-3'
                title={this.state.categorySelected}
                >
                {bookCategories.map((category, index) => {
                    return(
                        <Dropdown.Item
                            href='#/action-1'
                            key={`cat-${index}`}
                            onClick={() => this.handleDropdownChange(category)}
                        >{category}
                        </Dropdown.Item>
                    );
                })}    
                </DropdownButton>
                <FormControl
                    placeholder='Search books by title'
                    aria-label='search'
                    aria-describedby='basic-addon1'
                    onChange={(e) => this.handleSearchQuery(e.target.value)}
                />
                </InputGroup>
            <Row className="mx-0 pb-3">
                {this.state.books.map((book) => {
                    return (
                        <Col className="col-md-3 py-3"  key={book.asin}>
                            <Card style={{width: 15 + 'rem', height: 30 + 'rem'}}>
                                <Card.Img 
                                    className="img-fluid" 
                                    variant="top" 
                                    src={book.img} 
                                    style={{width: 15 + 'rem', height: 15 + 'rem'}}
                                    onClick={() => this.showBookComment(book)}
                                    />
                                <Card.Body >
                                    <Card.Title className="font-weight-light">{book.title}</Card.Title>
                                </Card.Body>
                            </Card>  
                        </Col>
                    );
                })}                
            </Row>
            <Row>
                <Col xs={12} >
                    <CommentList selectedBook={this.state.selectedBook} />
                </Col>
            </Row>
            </>
        )
    }
}

export default LatestRealease;

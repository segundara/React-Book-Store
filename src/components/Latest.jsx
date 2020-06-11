import React from 'react';
import {Card, Row, Col, Dropdown, DropdownButton, FormControl, InputGroup} from 'react-bootstrap';
import CommentList from './CommentList';
import { Link } from 'react-router-dom';

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
        books: books.fantasy.slice(0, 8),
        categorySelected: 'fantasy',
        selectedBook: null,
    };

    showBookComment = (book) => {
        this.setState({selectedBook: book});
    };

    handleDropdownChange = (category) => {
        this.setState({books: books[category].slice(0,8), categorySelected: category});
    };

    handleSearchQuery = (searchQuery) => {
        let category = this.state.categorySelected;

        if (searchQuery) {
            let filteredbooks =books[category].filter((book) => 
            book.title.toLowerCase().includes(searchQuery.toLowerCase()));

            this.setState({books: filteredbooks.slice(0,8)});
        }
        else {
            this.setState({books: books[category].slice(0,8)});
        }
    }

    render() {
        //let category = this.state.categorySelected;
        //console.log(books.history.filter((book)=>book.asin.includes('0316438960')))
        return (
            <>
                    <Row className="mx-0 pb-3">
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
                        
                            {this.state.books.map((book) => {
                                return (
                                    <Col xs={12} md={3} className="py-3"  key={book.asin}>
                                        <Card style={{width: 15 + 'rem', height: 15 + 'rem'}}>
                                            <Link to={'/details/' + book.asin}>
                                            <Card.Img 
                                                className="img-fluid" 
                                                variant="top" 
                                                src={book.img} 
                                                style={{width: 15 + 'rem', height: 15 + 'rem'}}
                                                // onClick={() => this.showBookComment(book.asin)}
                                                />
                                            </Link>
                                        </Card>  
                                    </Col>
                                );
                            })}                
                    </Row>
                
            </>
        )
    }
}

export default LatestRealease;

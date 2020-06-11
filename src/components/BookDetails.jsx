import React from 'react'
import {Container, Image, Card, Row, Col, Dropdown, DropdownButton, FormControl, InputGroup} from 'react-bootstrap';
import CommentList from './CommentList';

let books = [
    require('../data/fantasy.json'),
    require('../data/history.json'),
    require('../data/horror.json'),
    require('../data/romance.json'),
    require('../data/scifi.json')
]


class BookDetails extends React.Component {
    state={
        item:[]
    }

    componentDidMount (){
        console.log(this.props.match.params.id)
        books.map((book)=>{
            let found = book.filter((item)=>item.asin.includes(this.props.match.params.id))
            if (found.length > 0){
                console.log(found[0])
                this.setState({item: found[0]})
            }
        })
    }
    //console.log(books.filter((book)=>book.asin.includes(props.match.params.id)))
    render(){
    return (
        <Container>
            <Row>
                <Col xs={'auto'}>
                    <Image src={this.state.item.img} style={{width: 15 + 'rem', height: 15 + 'rem'}}/>
                </Col>
                <Col>
                    <h4>{this.state.item.title}</h4>
                    <br/>
                    <CommentList selectedBook={this.props.match.params.id} />
                </Col>
            </Row>
        </Container>
    )
}
}

export default BookDetails

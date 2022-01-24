import { Component } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import { Col, Row } from "react-bootstrap";

class BookStore extends Component {

  // now BookStore receives addToCart!
  // it's stored into this.props.addToCart

  state = {
    books: [],
    bookSelected: null,
  };

  componentDidMount = async () => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/food-books"
      );
      if (resp.ok) {
        let books = await resp.json();
        this.setState({ books });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  changeBook = (book) => this.setState({ bookSelected: book });

  render() {
    return (
      <Row>
        <Col md={4}>
          <BookList
            bookSelected={this.state.bookSelected}
            changeBook={this.changeBook}
            books={this.state.books}
          />
        </Col>
        <Col md={8}>
          <BookDetail
            bookSelected={this.state.bookSelected}
            addToCart={this.props.addToCart}
          // I'm receiving addToCart from App just for passing it
          // down to BookDetail!
          // this process is called "prop drilling"
          />
        </Col>
      </Row>
    );
  }
}

export default BookStore;

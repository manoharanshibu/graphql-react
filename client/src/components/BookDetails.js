import React, { Component } from "react";
import { graphql } from "react-apollo";

import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  displayBookDeatils() {
    const { book } = this.props.data;

    if (book) {
        console.log(book)
      return (
        <div id="book-details">
          <h2>{book.name} </h2>
          <p> {book.genre} </p>
          <p> {book.author.name} </p>
          <p>All Books By this Author</p>
          <ul>
          {book.author.books.map(item => {
            return <li key={item.id}>{item.name}</li>;
          })}
          </ul>
        </div>
      );
    } else {
        return <h1>No Books by this author </h1>
    }
  }
  render() {
    return (
      <div id="book-details">
        {this.displayBookDeatils()}
      </div>
    );
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);

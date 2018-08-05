import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

class AddBook extends Component {
  displayAuthors() {
    const data = this.props.data;
    console.log(data);
    if (data.loading) {
      return <option>Loading authors...</option>;
    } else {
      return data.authors.map(author => {
        console.log(author);
        if (author) {
          return (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          );
        } else {
          return null;
        }
      });
    }
  }

  render() {
    return (
      <form id="add-book">
        <div className="field">
          <label>Book name:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select author</option>
            { this.displayAuthors() }
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);

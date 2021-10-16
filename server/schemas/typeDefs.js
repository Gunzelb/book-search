const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
    bookCount: Int
  }

  type Book {
    _id: ID
    title: String
    authors: [String]
    description: String
    bookID: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(username: String!): User
    user(_id: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: Book!): User
    deleteBook(bookId: Int!): User
  }
`;

module.exports = typeDefs;

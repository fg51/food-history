import {GraphQLServer } from 'graphql-yoga';

const food_store =  [
  // {id: '1', name: 'APPLE', serial: '100', planet: 'EARTH', sweet: 10},
  {id: '1', name: 'APPLE'},
];

const resolvers = <any> {
  Query: {
    allFoods: () => {
      return food_store;
    },
  }
};


const server = new GraphQLServer({
  typeDefs: './food.graphql',
  resolvers
});

server.start({port: 8080}, () => {
  console.log('Your GraphQL server is running')
});

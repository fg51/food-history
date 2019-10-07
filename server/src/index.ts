import { ulid } from 'ulid';
import { GraphQLServer } from 'graphql-yoga';
import { QueryResolvers, Resolvers } from '../gen/graphql-resolver-types';
import { Food } from '../gen/graphql-resolver-types';

const values: Food[] = [
  {
    id: ulid(),
    name: 'apple'
  },
  {
    id: ulid(),
    name: 'banana'
  }
];

const Query: QueryResolvers = {
  // async foods(_parent, _args, _context, _info) {
  async foods() {
    const foods = await values;
    return foods || null;
  }
};

const resolvers: Resolvers = {
  Query: Query
};

const server = new GraphQLServer({
  typeDefs: './graphql/schema.graphql',
  resolvers: resolvers as any // eslint-disable-line
});

server.start({ port: 8080 }, () =>
  console.log('Server is unning on localhost:8080')
);

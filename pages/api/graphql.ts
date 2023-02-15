import { ApolloServer } from 'apollo-server-micro';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from '../../graphql/schema';
import { resolvers } from '../../graphql/resolvers';
import * as casual from 'casual';
import Cors from 'micro-cors';

// const cors = Cors();

const mocks = {
  Person: () => ({
    id: casual.uuid,
    name: casual.name,
    address: casual.address,
    email: casual.email,
    phone: casual.phone,
  }),
  Query: () => ({
    people: () => {
      const fakeData = [];
      for (let i = 0; i < 60; i++) {
        fakeData.push({
          name: casual.name,
          address: casual.address,
          email: casual.email,
          phone: casual.phone,
        });
      }
      return fakeData;
    },
  }),
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

// const apolloServer = new ApolloServer({
//   schema: addMocksToSchema({
//     schema: makeExecutableSchema({ typeDefs, resolvers }),
//     mocks,
//   }),
// });

const startServer = apolloServer.start();


export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
};
export const config = {
  api: {
    bodyParser: false,
  },
};

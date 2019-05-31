import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client'
import resolvers from './resolvers';
import {getUser} from "./authorizer";

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: ({ request }) => {
    const tokenWithBearer = request.headers.authorization || '';
    const token = tokenWithBearer.split(' ')[1];
    const user = getUser(token);

    return {
      user,
      prisma, // the generated prisma client if you are using it
    };
  },
});
server.start({
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    }
  },
  () => console.log('Server is running on http://localhost:4000'),
);

import * as bcrypt from 'bcryptjs';
import { IResolvers } from 'graphql-tools';
import { generateToken } from './authorizer';

// @ts-ignore
export default {
  Mutation: {
    register: async (_, { username, email, password }, ctx) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await ctx.prisma.createUser({
        username,
        email,
        password: hashedPassword,
      });
      return user;
    },

    login: async (_, { username, password }, ctx) => {
      const user = await ctx.prisma.user({ username });

      if (!user) {
        throw new Error('Invalid Login')
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw new Error('Invalid Login')
      }

      const token = generateToken(user);
      return {
        token,
        user,
      }
    }
  },
  Query: {
    search: async (_, { keyword }, ctx) => {
      return ctx.prisma.books({
        where: {
          OR: [
            { title_contains: keyword },
            { author_contains: keyword },
          ]
        }
      });
    }
  }
} as IResolvers;

import * as bcrypt from 'bcryptjs';
import { IResolvers } from 'graphql-tools';
import { generateToken } from './authorizer';
import NaverBookApi from "./Service/NaverBookApi";

// @ts-ignore
export default {
  Mutation: {
    register: async (_, { email, id }, ctx) => {
      // todo
      const user = await ctx.prisma.createUser({
        email,
        nickname: 'test',
      });
      await ctx.prisma.createSocial({
        externalId: id,
        type: 'test',
        user,
      });
      return ctx.prisma.user({ email });
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
    search: async (_, { keyword }) => {
      // todo
      return await NaverBookApi.search(keyword);
      // return ctx.prisma.books({
      //   where: {
      //     OR: [
      //       { title_contains: keyword },
      //       { author_contains: keyword },
      //     ]
      //   }
      // });
    },
    currentUser: async(_, {}, ctx) => {
      // todo
      const user = await ctx.prisma.user({ username: 'test' });
      if (!user) {
        return await ctx.prisma.createUser({
          email: 'test@test.com',
          nickname: 'test',
        });
      }
      return user;
    }
  }
} as IResolvers;

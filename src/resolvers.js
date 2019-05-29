import bcrypt from 'bcryptjs';
import { generateToken } from './authorizer';

export default {
  Mutation: {
    register: async (parent, { username, email, password }, ctx, info) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await ctx.prisma.createUser({
        username,
        email,
        password: hashedPassword,
      });
      return user;
    },

    login: async (parent, { username, password }, ctx, info) => {
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
    search: async (parent, { keyword }, ctx, info) => {
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
};

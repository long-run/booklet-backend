import jwt from 'jsonwebtoken';

export const generateToken = (user: any) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
    },
    'secret',
    { expiresIn: '30d' },
  );
};

export const getUser = (token: any) => {
  try {
    if (token) {
      return jwt.verify(token, 'secret')
    }
    return null
  } catch (err) {
    return null
  }
};

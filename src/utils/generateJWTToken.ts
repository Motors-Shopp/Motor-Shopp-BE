import jwt from 'jsonwebtoken';

export const generateJWTToken = (id: string): string => {
  return jwt.sign({ userid: id }, process.env.SECRET_KEY as string, { subject: id, expiresIn: '12h' });
};

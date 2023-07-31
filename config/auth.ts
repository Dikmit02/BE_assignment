import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  jwt: {
    secret: process.env.JWT_SECRET,
    ttl: process.env.JWT_TTL,
  },
  bcryptSalt: +process.env.BCRYPT_SALT,
}));

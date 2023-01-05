import { compare } from "bcryptjs";
import "dotenv/config";
import jwt from "jsonwebtoken";

import User from "@entities/users.entity";
import { IUserLogin } from "@interfaces/user.interface";

import AppDataSource from "src/data-source";

export const newSessionService = async ({ email, password }: IUserLogin) => {
  const users = AppDataSource.getRepository(User);

  const user = await users.findOne({ where: { email: email } });

  if (!user) {
    throw new Error("user not found");
  }

  if (!user.is_active) {
    throw new Error("user is inactive");
  }

  const matchPassword = await compare(password, user.password);

  if (!matchPassword) {
    throw new Error("email or password is wrong");
  }

  const token = jwt.sign(
    {
      is_active: user.is_active,
      is_client: user.is_client,
      is_seller: user.is_seller,
    },
    process.env.SECRET_KEY as string,
    { subject: user.id, expiresIn: "24h" }
  );

  return token;
};

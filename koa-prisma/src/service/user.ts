import { PrismaClient } from "@prisma/client";
import type { Omit } from "typing";
import { User } from "user";

export const createUser = async (db: PrismaClient, user: Omit<User, "id">) => {
  await db.$connect();
  return db.user.create({
    data: {
      ...user,
    },
  });
};

export const updateUser = async (db: PrismaClient, user: Omit<User, "id">) => {
  console.log(user);
  await db.$connect();
  return db.user.update({
    data: {
      username: user.username,
      password: user.password,
      admin: user.admin,
    },
    where: {
      email: user.email,
    },
  });
};

export const findByEmail = async (db: PrismaClient, email: string) => {
  await db.$connect();
  return db.user.findUnique({
    where: {
      email,
    },
  });
};

export const findByUsername = async (db: PrismaClient, username: string) => {
  await db.$connect();
  return db.user.findFirst({
    where: {
      username,
    },
  });
};

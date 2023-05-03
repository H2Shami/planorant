// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client"

class Character {
  constructor(name, duelist, controller, initiator, sentinel, path) {
    this.name = name;
    this.duelist = duelist;
    this.controller = controller;
    this.initiator = initiator;
    this.sentinel = sentinel;
    this.path = path;
  }
}

const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log("HANDLER FUNCTION CALLED!");
  try {
    const data = await prisma.Character.findMany();
    return res.status(200).json(data);
  }
  catch (error) {
    return res.status(500).json(error);
  }
}

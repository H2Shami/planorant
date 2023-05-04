// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client"

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

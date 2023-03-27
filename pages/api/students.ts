import { NextApiRequest, NextApiResponse } from "next";
import { students } from "./db";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(students);
}

export default handler;
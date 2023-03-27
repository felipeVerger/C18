import { NextApiRequest, NextApiResponse } from "next";
import { students } from "./db";

const handler  = (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req;

    if (req.method === "POST") {
        students.push(body);
        res.status(200).json(body);
    }
}
import { NextApiRequest, NextApiResponse } from "next";
import { students } from "./db";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const filteredStudents = students.filter((student) => JSON.parse(student.calificaciones.PrimerCuatr) < 6 || JSON.parse(student.calificaciones.SegundoCuatr) < 6);
    res.status(200).json(filteredStudents);
}

export default handler;
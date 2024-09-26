import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
const port = process.env.API_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the convoyer app !");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost/:${port}`);
});

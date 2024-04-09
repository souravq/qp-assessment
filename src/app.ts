import express, { Application, Request, Response } from "express";
import { AdminRouter } from "./app/modules/admin/admin.routes";
const app: Application = express();

// Parser
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("App is running");
});

app.use("/admin", AdminRouter);

export default app;

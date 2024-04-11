import express, { Application, Request, Response } from "express";
import { AdminRouter } from "./app/modules/admin/admin.routes";
import { UserRouter } from "./app/modules/user/user.routes";
import { gloablErrorHandler } from "./app/middlewares/globalErrorHandler";
const app: Application = express();

// Parser
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("App is running");
});

app.use("/admin", AdminRouter);

app.use("/user", UserRouter);

app.use(gloablErrorHandler);

export default app;

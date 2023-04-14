import { Router } from "express";
import { getWhoamiData } from "./controller";

export const infoRouter = Router();

infoRouter.get("/whoami", getWhoamiData);

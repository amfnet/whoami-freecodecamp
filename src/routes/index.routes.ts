import { Router } from "express";
import { infoRouter } from "../components/info/routes";

export const router = Router();

router.use("/api", infoRouter);

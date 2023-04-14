import { Request, Response } from "express";
import { fillInfo } from "./utils";

export function getWhoamiData(req: Request, res: Response) {
	res.json(
		fillInfo(
			req.ip,
			req.headers["accept-language"],
			req.headers["user-agent"]
		)
	);
}

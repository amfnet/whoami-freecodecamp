import { ResponseWhoami } from "./interfaces";

export function fillInfo(
	ipaddress: ResponseWhoami["ipaddress"],
	language: ResponseWhoami["language"],
	software: ResponseWhoami["software"]
): ResponseWhoami {
	return { ipaddress, language, software };
}

import { realpath } from "node:fs/promises";
import { pathToFileURL } from "node:url";

export const isExecuted = async () =>
	import.meta.url ===
	pathToFileURL(process.argv[1] ? await realpath(process.argv[1]) : "").href;

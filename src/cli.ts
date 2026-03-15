#!/usr/bin/env node

import { halk } from "@/halk";
import { isExecuted } from "@/utils/is-executed";
import type { Commands } from "./types";

export const runCli = async (
	args: string[],
	writeLine: (line: string) => void = console.log,
) => {
	const [command, name] = args;
	try {
		await halk(command as Commands, name);
		writeLine("All operations had been completed successfully");
	} catch (error) {
		writeLine(`An error occurred:\n${error}`);
		return 1;
	}
	return 0;
};

isExecuted().then(
	(isExecuted) =>
		isExecuted && runCli(process.argv.slice(2)).then(process.exit),
);

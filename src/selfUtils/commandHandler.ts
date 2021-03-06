import glob from "glob";
const { sync } = glob;
import { resolve } from "path";

const commands: Map<string, any> = new Map();

const PATH = process.cwd() + "/build/commands/";
sync(PATH + "**/*.js").forEach((file: any) => {
    const {command} = require(resolve(file));
    commands.set(command.name, command);
});

export default commands;
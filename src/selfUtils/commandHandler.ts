import { Collection } from "discord.js";
import glob from "glob";
const { sync } = glob;
import { resolve } from "path";
import Command from "./commandFrame";

interface cmdInfo {
    name: string,
    description: string,
    args: string,
    category: string,
}

const commands: Collection<string, any> = new Collection();
const commandInfo: cmdInfo[] = [];

const PATH = process.cwd() + "/build/commands/";
sync(PATH + "*/*.js").forEach((file: any) => {
    const path = resolve(file);
    const category = path.replace(/\\[^\\]+\.js/i, "").split("\\").pop();
    const command: Command = require(path).command;
    const infos: cmdInfo = {name: command.name, description: command.description, args: command.args, category} //pain when you run out of good variable name
    commandInfo.push(infos);
    commands.set(command.name, command);
});

export {commands, commandInfo};
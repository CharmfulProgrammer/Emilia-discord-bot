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
const commandInfo: Collection<string, cmdInfo[]> = new Collection();

const PATH = process.cwd() + "/build/commands/";
sync(PATH + "*/*.js").forEach((file: any) => {
    const path = resolve(file);
    const category = path.replace(/\\[^\\]+\.js/i, "").split("\\").pop();
    const command: Command = require(path).command;
    //some confusing lines I believe. It will also work for the help command
    const infos: cmdInfo = {name: command.name, description: command.description, args: command.args, category} //pain when you run out of good variable name
    commandInfo.has(category) && commandInfo.get(category).push(infos) || commandInfo.set(category, [infos]);
    commands.set(command.name, command);
});

export {commands, commandInfo};
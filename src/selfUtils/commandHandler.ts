import { Collection } from "discord.js";
import glob from "glob";
const { sync } = glob;
import { resolve } from "path";

const commands: Map<string, any> = new Collection();
const commandInfo = {};

const PATH = process.cwd() + "/build/commands/";
sync(PATH + "*/*.js").forEach((file: any) => {
    const path = resolve(file);
    const category = path.replace(/\\[^\\]+\.js/i, "").split("\\").pop();
    const {command, command: {name, usage, description, alias}} = require(path);
    //some confusing lines I believe.
    commandInfo[category]?.push({name, usage, description, alias, category}) ?? (() =>{ commandInfo[category] = []; commandInfo[category]?.push({name, usage, description, alias, category})})()
    commands.set(name, command);
});

export {commands, commandInfo};
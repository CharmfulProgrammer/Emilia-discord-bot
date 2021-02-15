import glob from "glob";
const { sync } = glob;
import { resolve } from "path";

const commands: Map<string, any> = new Map();

const PATH = process.cwd() + "/build/commands/";
sync(PATH + "**/*.*").forEach((file: any) => {
    const {command} = require(resolve(file));
    for(const i in command.names){
        commands.set(command.names[i], command);
    }
});

export default commands;
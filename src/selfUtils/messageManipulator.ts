import {Message} from "discord.js";
import config from "../config";
const {prefixes} = config;

const messageManipulator = (message: Message) => {
    const regex = new RegExp(`^(${prefixes.join("|")})`);
    const msg: any = message.content.replace(regex, "");
    const startsWithPrefix: boolean = regex.test(message.content); 
    const [commandName, ...args] = msg.toLowerCase().trim().split(/ +/);
    return {startsWithPrefix, commandName, args};
};

export default messageManipulator;
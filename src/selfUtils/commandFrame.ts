import {Message} from "discord.js";

class Command{
    constructor(
        public name: string,
        public description: string,
        public usage: string,
        public execute: (message: Message, args?: string[]) => Promise<void>|void|undefined,
        public alias?: string[]
    ){}
}

export default Command;
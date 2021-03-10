import {Message} from "discord.js";

class Command{
    constructor(
        public name: string,
        public description: string,
        public args: string,
        public execute: (message: Message, args?: string[]) => Promise<(void|Message)>|Message|void|undefined,
        public alias?: string[]
    ){}
}

export default Command;
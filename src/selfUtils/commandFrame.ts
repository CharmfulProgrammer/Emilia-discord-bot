import {Message} from "./discordMessageType";

export default interface Command{
    names: string[],
    description: string,
    public: boolean,
    nsfw?: boolean,
    execute: (message:Message, args: string[]) => any
}
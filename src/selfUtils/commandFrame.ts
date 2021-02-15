import {Message} from "./discordMessageType";

export default interface Command{
    names: string[],
    description: string,
    nsfw?: boolean,
    execute: (message:Message, args: string[]) => void|undefined
}
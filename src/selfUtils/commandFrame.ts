import {Message} from "./discordMessageType";

export default interface Command{
    name: string,
    description: string,
    nsfw?: boolean,
    execute(message: Message, args?: string[]): any
}
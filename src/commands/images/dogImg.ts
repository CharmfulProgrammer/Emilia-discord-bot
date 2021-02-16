import Command from "../../selfUtils/commandFrame";
import {Embed} from "../../selfUtils/discordEmbedType";
import fetch from "node-fetch";

export const command: Command = {
    names: ["dog"],
    description: "Shows a random dog image",
    public: true,
    async execute(message, args): Promise<void>{
        const response = await fetch("https://some-random-api.ml/img/dog");
        const data = await response.json();
        const embed: Partial<Embed> = {
            color: "#0f0",
            title: "Here's a cute doggo",
            image: {
                url: data.link
            }
        }
        message.channel.send({embed});
    }
}
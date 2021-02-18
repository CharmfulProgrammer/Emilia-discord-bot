import Command from "../../selfUtils/commandFrame";
import {Embed} from "../../selfUtils/discordEmbedType";
import fetch from "node-fetch";

export const command: Command = {
    names: ["cat"],
    description: "Shows a random cat image",
    public: true,
    async execute(message): Promise<void>{
        const response = await fetch("https://some-random-api.ml/img/cat");
        const data = await response.json();
        const embed: Partial<Embed> = {
            color: "#0f0",
            title: "Here's a cute cat",
            image: {
                url: data.link
            }
        };
        message.channel.send({embed});
    }
};
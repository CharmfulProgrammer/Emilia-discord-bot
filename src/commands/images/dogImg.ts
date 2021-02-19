import Command from "../../selfUtils/commandFrame";
import {MessageEmbed} from "discord.js";
import fetch from "node-fetch";

export const command = new Command(
    "dog",
    "Shows a random dog picture",
    "dog",
    async(message) => {
        const response = await fetch("https://some-random-api.ml/img/dog");
        const data = await response.json();
        const embed: Partial<MessageEmbed> = {
            color: 0x0f0,
            title: "Here's a cute doggo",
            image: {
                url: data.link
            }
        };
        message.channel.send({embed});
    }
);
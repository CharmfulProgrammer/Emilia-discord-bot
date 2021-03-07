import Command from "../../selfUtils/commandFrame";
import {MessageEmbed} from "discord.js";
import fetch from "node-fetch";

export const command = new Command(
    "cat",
    "Shows a random cat picture",
    "cat",
    async(message) => {
        try {
            const response = await fetch("https://some-random-api.ml/img/cat");
            const data = await response.json();
            const embed: Partial<MessageEmbed> = {
                color: 0x0ee67a,
                title: "Here's a cute cat",
                image: {
                    url: data.link
                }
            };
            message.channel.send({embed});
        } catch {
            message.channel.send("Something went wrong, try again")
        }
    }
);
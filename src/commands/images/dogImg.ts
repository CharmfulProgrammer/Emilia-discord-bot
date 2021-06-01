import { MessageEmbed } from "discord.js";
import fetch from "node-fetch";

export default {
  async execute(message) {
    try {
      const response = await fetch("https://some-random-api.ml/img/dog");
      const data = await response.json();
      const embed: Partial<MessageEmbed> = {
        color: 0x0ee67a,
        title: "Here's a cute doggo",
        image: {
          url: data.link,
        },
      };
      message.channel.send({ embed });
    } catch {
      message.channel.send("Something went wrong, try again");
    }
  },
};

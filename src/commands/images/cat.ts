import { MessageEmbed } from "discord.js";
import fetch from "node-fetch";

export default {
  name: "cat",
  async execute(message) {
    try {
      const response = await fetch("https://some-random-api.ml/img/cat");
      const data = await response.json();
      const embed = new MessageEmbed()
        .setTitle("Here's a cute cat")
        .setColor(0x0ee67)
        .setImage(data.link);
      message.channel.send({ embed });
    } catch {
      message.channel.send("Something went wrong, try again");
    }
  },
};

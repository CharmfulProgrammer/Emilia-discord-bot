import command from "types/commandType";
import { MessageEmbed } from "discord.js";
import fetch from "node-fetch";

export default {
  name: "dog",
  description: "See cute dogs",
  usage: "dog",
  async execute(message) {
    try {
      const response = await fetch("https://some-random-api.ml/img/dog");
      const data = await response.json();
      const embed = new MessageEmbed()
        .setTitle("Here's a cute doggo")
        .setColor(0x0ee67)
        .setImage(data.link);
      message.channel.send({ embed });
    } catch {
      message.channel.send("Something went wrong, try again");
    }
  },
} as command;

import command from "commandType";
import { MessageEmbed } from "discord.js";
import Neko from "nekos.life";
const { sfw } = new Neko();

export default {
  name: "waifu",
  description: "See random generated waifus that doesn't exist, well your waifu already doesn't exist",
  usage: "waifu",
  async execute(message) {
    try {
      const data = await sfw.waifu();
      const embed = new MessageEmbed()
        .setTitle("UwU")
        .setColor(0x8f3fc4)
        .setImage(data.url);
      message.channel.send({ embed });
    } catch {
      message.channel.send("Something went wrong, try again.");
    }
  },
} as command;

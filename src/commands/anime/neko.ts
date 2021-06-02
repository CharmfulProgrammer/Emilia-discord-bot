import { MessageEmbed } from "discord.js";
import Neko from "nekos.life";
const { sfw } = new Neko();

export default {
  name: "neko",
  async execute(message) {
    try {
      const data = await sfw.neko();
      const embed = new MessageEmbed()
        .setTitle("Nya~~~")
        .setColor(0x41d18b)
        .setImage(data.url);
      message.channel.send({ embed });
    } catch {
      message.channel.send("Something went wrong, try again");
    }
  },
};

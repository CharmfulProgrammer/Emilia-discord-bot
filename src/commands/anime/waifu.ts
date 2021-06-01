import { MessageEmbed } from "discord.js";
import Neko from "nekos.life";
const { sfw } = new Neko();

export default {
  async execute(message) {
    try {
      const data = await sfw.waifu();
      const embed: Partial<MessageEmbed> = {
        color: 0x8f3fc4,
        title: "UwU",
        image: {
          url: data.url,
        },
      };
      message.channel.send({ embed });
    } catch {
      message.channel.send("Something went wrong, try again.")
    }
  },
};

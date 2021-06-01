import User from "../../selfUtils/fetchUser";
import { MessageEmbed } from "discord.js";

export default {
  async execute(message, args) {
    try {
      const user = await User(message, args);
      const userName = await user.username;
      const avatar = user.avatarURL({ dynamic: true, size: 2048 });
      const embed: Partial<MessageEmbed> = {
        color: 0x0ee67a,
        title: userName,
        image: {
          url: avatar,
        },
      };
      message.channel.send({ embed });
    } catch {
      message.channel.send("Something went wrong");
    }
  },
};

import fetchUser from "../../libs/fetchUser";
import { MessageEmbed } from "discord.js";
import command from "commandType";

export default {
  name: "avatar",
  description: "See someone's beautiful profile picture",
  usage: ["avatar", "avatar YourCrush", "avatar @Charm@0690", "avatar *user-id*"],
  alias: ["av", "pfp"],
  async execute(message, args) {
    try {
      const user = await fetchUser(message, args);
      const userName = await user.username;
      const avatar = user.avatarURL({ dynamic: true, size: 2048 });
      const embed = new MessageEmbed()
        .setTitle(userName)
        .setColor(0x0ee67a)
        .setImage(avatar);
      message.channel.send({ embed });
    } catch {
      message.channel.send("Something went wrong");
    }
  },
} as command;

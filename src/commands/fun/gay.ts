import { MessageAttachment } from "discord.js";
import command from "commandType";
import fetchUser from "../../libs/fetchUser";

export default {
  name: "gay",
  description: "Make it rainbow🌈",
  usage: ["gay", "gay ayan", "gay @Yoda#0660", "gay *user-id*"],
  async execute(message, args) {
    try {
      let imgURL = !message.attachments.size
        ? (await fetchUser(message, args)).avatarURL({
            size: 2048,
            format: "png",
          })
        : message.attachments.first().url;
      const url = `https://some-random-api.ml/canvas/gay?avatar=${imgURL}`;
      const attachment = new MessageAttachment(url, "gay.png");
      message.channel.send(attachment);
    } catch {
      message.channel.send("Something went wrong, try again");
    }
  },
} as command;

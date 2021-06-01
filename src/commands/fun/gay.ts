import { MessageAttachment } from "discord.js";
import User from "../../selfUtils/fetchUser";

export default {
  async execute(message, args) {
    try {
      let imgURL = !message.attachments.size
        ? (await User(message, args)).avatarURL({ size: 2048, format: "png" })
        : message.attachments.first().url;
      const url = `https://some-random-api.ml/canvas/gay?avatar=${imgURL}`;
      const attachment = new MessageAttachment(url, "gay.png");
      message.channel.send(attachment);
    } catch {
      message.channel.send("Something went wrong, try again");
    }
  },
};

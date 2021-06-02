import { MessageAttachment } from "discord.js";
import fetchUser from "@libs/fetchUser";

export default {
  async execute(message, args) {
    try {
      let imgURL = !message.attachments.size
        ? (await fetchUser(message, args)).avatarURL({ size: 2048, format: "png" })
        : message.attachments.first().url;
      const url = `https://some-random-api.ml/canvas/invert?avatar=${imgURL}`;
      const attachment = new MessageAttachment(url, "invert.png");
      message.channel.send(attachment);
    } catch {
      message.channel.send("Something went wrong, try again");
    }
  },
};

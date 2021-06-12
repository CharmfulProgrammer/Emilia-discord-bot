import command from "commandType";
import { MessageAttachment } from "discord.js";
import fetchUser from "../../libs/fetchUser";

export default {
  name: "waste",
  description: "Wasted *_*",
  usage: ["waste", "waste LoystonLive", "waste @ayan@8744", "waste *user-id*"],
  async execute(message, args) {
    try {
      let imgURL = !message.attachments.size
        ? (await fetchUser(message, args)).avatarURL({
            size: 2048,
            format: "png",
          })
        : message.attachments.first().url;
      const url = `https://some-random-api.ml/canvas/wasted?avatar=${imgURL}`;
      const attachment = new MessageAttachment(url, "wasted.png");
      message.channel.send(attachment);
    } catch {
      message.channel.send("Something went wrong, try again");
    }
  },
} as command;

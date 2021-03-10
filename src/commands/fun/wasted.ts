import { MessageAttachment } from "discord.js";
import Command from "../../selfUtils/commandFrame";
import User from "../../selfUtils/fetchUser";

export const command = new Command(
    "waste",
    "WASTED",
    "<user|attached image>(optional)",
    async(message, args) => {
        try {
            let imgURL = !message.attachments.size? (await User(message, args)).avatarURL({size: 2048, format: "png"}) : message.attachments.first().url;
            const url = `https://some-random-api.ml/canvas/wasted?avatar=${imgURL}`;
            const attachment = new MessageAttachment(url, "wasted.png");
            message.channel.send(attachment);
        } catch {
            message.channel.send("Something went wrong, try again");
        }
    }
);
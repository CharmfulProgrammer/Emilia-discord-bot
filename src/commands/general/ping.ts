import Command from "../../selfUtils/commandFrame";

export const command = new Command(
    "ping",
    "To test if the bot is online",
    "ping",
    (message) => {
        message.channel.send("ping");
    }
);
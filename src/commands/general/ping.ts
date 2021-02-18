import Command from "../../selfUtils/commandFrame";

export const command: Command = {
    name: "ping",
    description: "To test if the bot is online",
    execute(message){
        message.channel.send("Pong");
    }
};
import Command from "../../selfUtils/commandFrame";

export const command: Command = {
    names: ["ping"],
    description: "To test if the bot is online",
    execute(message, args){
        message.channel.send("Pong")
    }
}
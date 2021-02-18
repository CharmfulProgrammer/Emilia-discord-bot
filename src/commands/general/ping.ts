import Command from "../../selfUtils/commandFrame";

export const command: Command = {
    names: ["ping"],
    description: "To test if the bot is online",
    public: true,
    execute(message){
        message.channel.send("Pong");
    }
};
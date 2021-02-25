import Command from "../../selfUtils/commandFrame";
import user from "../../selfUtils/fetchUser";

export const command = new Command(
    "test",
    "To test if the bot is online",
    "ping",
    async(message, args) => {
        const data = user(message, args);
        console.log(data);
    }
);
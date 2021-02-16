import Command from "../../selfUtils/commandFrame";
import fetch from "node-fetch";

export const command: Command = {
    names: ["catfact", "nekofact"],
    description: "Shows random cat fact!",
    public: true,
    async execute(message, args){
        const response = await fetch("https://some-random-api.ml/facts/cat");
        const data = await response.json();
        message.reply(data.fact);
    }
}
import Command from "../../selfUtils/commandFrame";
import fetch from "node-fetch";

export const command: Command = {
    name: "catfact",
    description: "Shows random cat fact!",
    async execute(message){
        const response = await fetch("https://some-random-api.ml/facts/cat");
        const data = await response.json();
        message.reply(data.fact);
    }
};
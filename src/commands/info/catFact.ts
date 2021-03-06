import Command from "../../selfUtils/commandFrame";
import fetch from "node-fetch";

export const command = new Command(
    "catfact",
    "Shows a random cat fact",
    "catfact",
    async(message) => {
        const response = await fetch("https://some-random-api.ml/facts/cat");
        const data = await response.json();
        message.channel.send(data.fact);
    }
);
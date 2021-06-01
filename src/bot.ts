import { Client, Message } from "discord.js";

const client = new Client();

client.once("ready", () => {
  console.log("Running...");
});

client.on("message", async (message: Message) => {});

client.login();

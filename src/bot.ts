import { Client, Message } from "discord.js";
import dotenv from "dotenv";

dotenv.config();
const client = new Client();
const PREFIX = process.env.PREFIX

client.once("ready", () => {
  console.log("Running...");
});

client.on("message", async (message: Message) => {
    const [command, ...args] = message.content.trim().toLowerCase().slice(PREFIX.length).split(" ");
    if(!message.content.startsWith(PREFIX) || message.guild.id !== "775030836868808724") return;

    console.log("hey")
});

client.login();
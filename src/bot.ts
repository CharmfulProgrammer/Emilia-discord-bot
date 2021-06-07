import { Client, Message } from "discord.js";
import dotenv from "dotenv";
import commands from "./libs/command";

dotenv.config();
const client = new Client();
const PREFIX = process.env.PREFIX;

client.once("ready", () => {
  console.log("Running...");
});

client.on("message", async (message: Message) => {
  const [command, ...args] = message.content
    .trim()
    .toLowerCase()
    .slice(PREFIX.length)
    .split(" ");
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  try {
    message.channel.startTyping()
    commands.get(command).execute(message, args);
    message.channel.stopTyping()
  } catch {}
});

client.login();

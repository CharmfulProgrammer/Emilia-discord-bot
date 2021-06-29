import { Client, Message } from "discord.js";
import dotenv from "dotenv";
import commands from "./libs/command";
import autocorrect from "./libs/autocorrect";

dotenv.config();
const client = new Client();
const PREFIX = process.env.PREFIX;

client.once("ready", () => {
  console.log("Running...");

  client.user.setActivity("<3help | under development", {
    type: "LISTENING",
  });
});

client.on("message", async (message: Message) => {
  const [command, ...args] = message.content
    .trim()
    .toLowerCase()
    .slice(PREFIX.length)
    .split(" ");
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  // something's weird with try-catch
  if (command === autocorrect(command))
    return commands.get(command).execute(message, args);
  message.channel.send(
    `${command} is not found, did you mean ${autocorrect(command)}`
  );
});

client.login();

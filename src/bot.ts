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

  try {
    commands.get(command).execute(message, args);
  } catch {
    const cmd = commands.find((c) => c?.alias?.includes(command));
    (cmd && commands.get(cmd.name).execute(message, args)) ||
      message.channel.send(`Did you mean ${autocorrect(command)}?`);
  }
});

client.login();

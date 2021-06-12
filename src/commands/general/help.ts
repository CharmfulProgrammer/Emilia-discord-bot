import command from "commandType";
import { MessageEmbed } from "discord.js";
import commands from "../../libs/command";

const commandGuide = (cmdObj: command) => {
  let a: string[] = cmdObj.usage as string[]
  const embed = new MessageEmbed().setTitle(cmdObj.name)
  .setDescription(cmdObj.description + "\n\nUsage:\n" + "```\n" + a.join("\n") +"\n```");
  // if(typeof cmdObj.usage === "string") embed.addField()
  return embed
};

export default {
  name: "help",
  description: "Get a lists of all available commands",
  usage: ["help", "help waifu"],
  execute(message, args) {
    // message.channel.send(commandGuide(commands.get("gay")))
    message.channel.send("this command is not available yet")
  },
} as command;

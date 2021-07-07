import command from "types/commandType";
import { MessageEmbed } from "discord.js";
import commands from "../../libs/command";

const botAvatar =
  "https://images-ext-2.discordapp.net/external/B5RXzgbVicvHV6uE8OlzITFa52OLH-gMjIhNnRZzMDg/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/730173626166542467/33ddc9a327c75b53f9cb746ef9560581.webp?width=670&height=670";
// something's wrong with Client.user.displayAvatarURL()

const commandGuide = (cmdObj: command) => {
  let usage: string;
  if (typeof cmdObj.usage !== "string") {
    usage = cmdObj.usage
      .map((cmd) => "→ " + process.env.PREFIX + cmd)
      .join("\n");
  } else {
    usage = "→ " + process.env.PREFIX + cmdObj.usage;
  }
  const embed = new MessageEmbed()
    .setColor(0x4f57f9)
    .setThumbnail(botAvatar)
    .setTitle("Command Info - " + cmdObj.name)
    .addFields([
      { name: "Description", value: cmdObj.description },
      { name: "Usage/Example(s)", value: usage },
      { name: "Alias(es)", value: cmdObj.alias.join(", ") || "none" },
    ]);
  return embed;
};

const categories = ["general", "image", "info", "fun", "anime", "economy"];
const commandList = () => {
  const embed = new MessageEmbed()
    .setColor(0x4f57f9)
    .setTitle("Emilia 0.5-dev")
    .setThumbnail(botAvatar)
    .setDescription(
      `Type \`${process.env.PREFIX}help <command>\` to get more info about a particular command`
    );
  categories.forEach((category) => {
    embed.addField(
      category,
      commands
        .filter((cmd) => cmd.category === category)
        .map((cmd) => cmd.name)
        .join(", ")
    );
  });
  return embed;
};

export default {
  name: "help",
  description: "Get a list of all available commands",
  usage: ["help", "help waifu"],
  execute(message, args) {
    if (args.length)
      try {
        return message.channel.send(commandGuide(commands.get(args[0])));
      } catch {
        return message.channel.send(
          "Make sure you typed the command name correctly"
        );
      }
    message.channel.send(commandList());
  },
} as command;

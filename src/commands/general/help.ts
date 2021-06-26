import command from "commandType";
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
    .setColor(0x524ef1)
    .setThumbnail(botAvatar)
    .setTitle("Command Info - " + cmdObj.name)
    .addFields([
      { name: "Description", value: cmdObj.description },
      { name: "Usage/Example(s)", value: usage },
      { name: "Alias(es)", value: cmdObj.alias || "none" },
    ]);
  return embed;
};

const categories = ["general", "image", "info", "fun", "anime"];
const commandList = () => {
  const embed = new MessageEmbed()
    .setTitle("Emilia 0.5-dev")
    .setThumbnail(botAvatar)
    .setDescription(
      `Type \`${process.env.PREFIX} <command>\` to get more info about a particular command`
    )
    .addField("hh", "lol")
    .addField("p", "d");
    // const list = [];
    // categories.forEach(category => {
    //   const cmd = commands.filter(command => command.category === category).map()
    //   embed.addField(category, cmd)
    // })
};

export default {
  name: "help",
  description: "Get a lists of all available commands",
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
    message.channel.send("hoo");
  },
} as command;

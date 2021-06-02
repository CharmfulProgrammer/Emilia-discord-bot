// this is a long shit which i dont know how i code long ago but it works so i dont dare to touch it

import { Message } from "discord.js";

const fetchUser = async (message: Message, args: string[]) => {
  if (!message.guild) return;
  const fullName = args.join(" ");
  if (!args.length && !message.mentions.users.size) {
    return message.author;
  } else {
    return (
      message.mentions.users.first() ||
      message.guild.members.cache.get(args[0])?.user ||
      message.guild.members.cache.find((member) => {
        const {
          user: { username },
          displayName,
        } = member;
        const [usrname, nickname] = [
          username.toLowerCase(),
          displayName.toLowerCase(),
        ];
        return nickname.includes(fullName) || usrname.includes(fullName);
      })?.user ||
      (await await message.client.users.fetch(args[0]))
    );
  }
};

export default fetchUser;

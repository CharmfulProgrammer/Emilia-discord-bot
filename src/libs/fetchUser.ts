import { Message } from "discord.js";

const fetchUser = async (message: Message, args: string[]) => {
  if (!message.guild) return;
  const nameRegex = new RegExp(
    `(${args.join(" +")})|(${args.join("|")})`,
    "gi"
  );
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
        return nameRegex.test(displayName) || nameRegex.test(username);
      })?.user ||
      (await await message.client.users.fetch(args[0]))
    );
  }
};

export default fetchUser;

import { Message } from "discord.js";

type command = {
  name: string;
  description: string;
  usage: string | string[];
  category: string;
  alias?: string[];
  execute: (message: Message, args?: string[]) => any;
};

export default command;

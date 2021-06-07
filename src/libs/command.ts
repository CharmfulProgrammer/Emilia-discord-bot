import { Collection } from "discord.js";
import glob from "glob";

const commands: Collection<string, any> = new Collection();

const commandFiles = glob
  .sync("./@(dist|src)/commands/**/*.*")
  .map(
    (f) => "../" + f.split(/[/\\]/g).reverse().slice(0, 3).reverse().join("/")
  );

commandFiles.forEach((file) => {
  try {
    const command = require(file).default;
    commands.set(command.name, command);
  } catch {}
});

export default commands;

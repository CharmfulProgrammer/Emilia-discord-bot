import { Collection } from "discord.js";
import glob from "glob";

type cmd = { name: string };
let commands: Collection<string, cmd> = new Collection();

export const findCommandFile = () =>
  new Promise<string[]>((resolve, reject) => {
    glob("./dist/commands/**/*.js", async (err, files) => {
      if (err) reject(err);
      return resolve(files);
    });
  });

findCommandFile()
  .then((files) => {
    console.log(files);
  })
  .catch((err) => {
    console.error(err);
  });

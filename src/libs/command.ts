import { Collection } from "discord.js";
import glob from "glob";

type cmd = { name: string; execute: () => any };
const commands: Collection<string, cmd> = new Collection();

const findCommandFile = () =>
  new Promise<string[]>((resolve, reject) => {
    glob("./@(dist|src)/commands/**/*.*", async (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });

const filesRelativePath = async () => {
  const files = await findCommandFile();
  const edited = files.map(
    (f) => "../" + f.split(/\\|\//).reverse().slice(0, 3).reverse().join("/")
  );
  return edited;
};

const insertCommand = async() => {
  (await filesRelativePath()).forEach(file => {
    console.log(file)
  })
}

insertCommand()
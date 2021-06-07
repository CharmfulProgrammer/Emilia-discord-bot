import autocorrect from "autocorrect";
import commands from "./command";

const command: string[] = [];
commands.forEach((cmd) => {
  command.push(cmd.name);
});

export default autocorrect({ words: command });

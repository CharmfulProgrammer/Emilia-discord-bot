import {Client, Message} from "discord.js";
import privateConfig from "./privateConfig";
//import privateConfig from "./_privateConfig";
const {TOKEN} = privateConfig;
import commands from "./selfUtils/commandHandler";
import messageManipulator from "./selfUtils/messageManipulator";
import autocorrect from "./selfUtils/spellCheck";

const client = new Client();

const commandNameArr = Object.keys(Object.fromEntries(commands));

client.once("ready", () => {
    console.log("Running...");
});

client.on("message", (message: Message) => {
    const {startsWithPrefix, commandName, args} = messageManipulator(message);
    const correctCommand = autocorrect(commandName, commandNameArr);

    if(!startsWithPrefix || message.author.bot) return;

    commands.has(commandName) && commands.get(commandName).execute(message, args) ||
    message.channel.send(correctCommand);

});

client.login(TOKEN);

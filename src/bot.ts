import {Client, Message} from "discord.js";
import privateConfig from "./privateConfig";
//import privateConfig from "./_privateConfig";
const {TOKEN} = privateConfig;
import commands from "./selfUtils/commandHandler";
import messageManipulator from "./selfUtils/messageManipulator";

const client = new Client();

client.once("ready", () => {
    console.log("Running...");
});

client.on("message", (message: Message) => {
    const {startsWithPrefix, commandName, args} = messageManipulator(message);

    if(!startsWithPrefix || message.author.bot) return;

    commands.has(commandName) && commands.get(commandName).execute(message, args);

});

client.login(TOKEN);

import * as Discord from "discord.js";
import privateConfig from "./privateConfig";
//import privateConfig from "./_privateConfig";
const {TOKEN} = privateConfig;
import commands from "./selfUtils/commandHandler";
import {Message} from "./selfUtils/discordMessageType";
import messageManipulator from "./selfUtils/messageManipulator";
import Client from "./selfUtils/discordClientType";

const client: Client = new Discord.Client();

client.once("ready", () => {
    console.log("Running...");
});

client.on("message", (message: Message) => {
    const {startsWithPrefix, commandName, args} = messageManipulator(message);

    if(!startsWithPrefix || message.author.bot) return;

    commands.has(commandName) && commands.get(commandName)?.execute(message, args);

});

client.login(TOKEN);

import {Client, Message} from "discord.js";
import { command } from "./commands/anime/neko";
import privateConfig from "./privateConfig";
//import privateConfig from "./_privateConfig";
const {TOKEN} = privateConfig;
import {commands} from "./selfUtils/commandHandler";
import messageManipulator from "./selfUtils/messageManipulator";
import autoCorrect from "./selfUtils/spellCheck";

const client = new Client();

client.once("ready", () => {
    console.log("Running...");
});

client.on("message", async(message: Message) => {
    const {startsWithPrefix, commandName, args} = messageManipulator(message);
    const correctCommand = autoCorrect(commandName);

    if(!startsWithPrefix || message.author.bot) return;

    try {
        message.channel.startTyping();   
        if(commands.has(commandName))
            await commands.get(commandName).execute(message, args);
        else 
            await message.channel.send(`Command not found, did you mean ${correctCommand}`);
        message.channel.stopTyping();
    } catch {}

});

client.login(TOKEN);

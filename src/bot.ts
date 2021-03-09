import {Client, Message} from "discord.js";
import privateConfig from "./privateConfig";
//import privateConfig from "./_privateConfig";
const {TOKEN} = privateConfig;
import {commands} from "./selfUtils/commandHandler";
import messageManipulator from "./selfUtils/messageManipulator";
import autoCorrect from "./selfUtils/spellCheck";

const client = new Client();

const commandNameArr = Object.keys(Object.fromEntries(commands));

client.once("ready", () => {
    console.log("Running...");
});

client.on("message", async(message: Message) => {
    const {startsWithPrefix, commandName, args} = messageManipulator(message);
    const correctCommand = autoCorrect(commandName, commandNameArr);

    if(!startsWithPrefix || message.author.bot) return;

    message.channel.startTyping();   
    if(commands.has(commandName))
        await commands.get(commandName).execute(message, args);
    else 
        await message.channel.send(correctCommand);
    message.channel.stopTyping();

});

client.login(TOKEN);

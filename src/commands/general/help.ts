import Command from "../../selfUtils/commandFrame";
import {categories, commandInfo} from "../../selfUtils/commandHandler";
import {Message, MessageEmbed} from "discord.js"

export const command = new Command(
    "help",
    "Provides list of commands with their description.",
    "help",
    async(message, args) => {
        try {
            if(args.length) {
                specificHelp(message, args);
            }else {
                allHelp(message, args);
            }
        } catch {
            
        }
    }
);

const specificHelp = (message: Message, args: string[]) => {
    const infos = commandInfo.find(cmd => cmd.name === args[0])
    const embed: Partial<MessageEmbed> = {
        color: 0x034efc,
        title: infos.name,
        description: infos.description,
        fields: [
            {
                name: "Category",
                value: infos.category,
                inline: false
            },
            {
                name: "Arguments",
                value: infos.args,
                inline: false
            },
        ],
        footer: {
            text: "user: user id|mention|name"
        }
    }
    message.channel.send({embed});
}

const allHelp = (message: Message, args: string[]) => {
    
}
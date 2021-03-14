import Command from "../../selfUtils/commandFrame";
import {commandInfo} from "../../selfUtils/commandHandler";
import {Message, MessageEmbed} from "discord.js";
import autocorrect from "../../selfUtils/spellCheck";

export const command = new Command(
    "help",
    "Provides list of commands with their description.",
    "help",
    async(message, args) => {
        try {
            if(args.length) {
                specificHelp(message, args);
            }else {
                allHelp(message);
            }
        } catch(err) {
            console.log(err);
        }
    }
);

const specificHelp = (message: Message, args: string[]) => {
    const infos = commandInfo.find(cmd => cmd.name === args[0]);
    if(!infos) {
        return message.channel.send(`Command not found, did you mean ${autocorrect(args[0])}`);
    }
    console.log(infos);
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

const allHelp = (message: Message) => {
    type embedField = {
        name: string,
        value: string,
        inline: boolean
    }
    const categories: Map<string, string[]> = new Map();
    const field: embedField[] = [];
    for(const cmdinfo of commandInfo) {
        categories.set(cmdinfo.category, []);
    }
    commandInfo.forEach(command => {
        categories.get(command.category).push(command.name);
    });
    const catgs = Object.keys(Object.fromEntries(categories)); //pain of lack of variable names
    categories.forEach(command => {
        field.push({
            name: catgs.shift(),
            value: command.join(", "),
            inline: false
        })
    });
    const embed: Partial<MessageEmbed> = {
        color: 0x034efc,
        title: "All commands",
        description: "List of all commands sorted by categories",
        fields: [...field]
    }
    message.channel.send({embed});
}
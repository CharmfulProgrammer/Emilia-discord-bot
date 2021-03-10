import Command from "../../selfUtils/commandFrame";
import {commandInfo} from "../../selfUtils/commandHandler";
import {MessageEmbed} from "discord.js"
import config from "../../config";

export const command = new Command(
    "help",
    "Provides list of commands with their description.",
    "help",
    async(message, args) => {
        try {
            if(args.length) {
                let infos;
                commandInfo.forEach(cmd => {
                    if(cmd.find(name => name.name === args[0])){
                        infos = cmd.find(name => name.name === args[0]);
                    };
                });
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
        } catch {
            
        }
    }
);
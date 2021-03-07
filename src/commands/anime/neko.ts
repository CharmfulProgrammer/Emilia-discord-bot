import Command from "../../selfUtils/commandFrame";
import {MessageEmbed} from "discord.js";
import Neko from "nekos.life";
const {sfw} = new Neko();

export const command = new Command(
    "neko",
    "Shows random neko girl",
    "neko",
    async(message) => {
        try {
            const data = await sfw.neko();
            const embed: Partial<MessageEmbed> = {
                title: "Nya~~~",
                color: 0x41d18b,
                image: {
                    url: data.url
                }
            } 
            message.channel.send({embed});
        } catch {
            message.channel.send("Something went wrong, try again");
        }
    });
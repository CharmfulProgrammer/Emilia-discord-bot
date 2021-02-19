import Command from "../../selfUtils/commandFrame";
import {MessageEmbed} from "discord.js";
import Neko from "nekos.life";
const {sfw} = new Neko();

export const command = new Command(
    "waifu",
    "Shows a random waifu picture",
    "waifu",
    async(message) => {
        const data = await sfw.waifu();
        const embed: Partial<MessageEmbed> = {
            color: 0x8f3fc4,
            title: "UwU",
            image: {
                url: data.url
            }
        }
        message.channel.send({embed});
    }
);
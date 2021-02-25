import Command from "../../selfUtils/commandFrame";
import user from "../../selfUtils/fetchUser";
import {MessageEmbed} from "discord.js";

export const command = new Command(
    "avatar",
    "Shows either yours or the given user's profile picture",
    "avatar | pfp | a",
    async(message, args) => {
        try {
            const avatar = user(message, args).displayAvatarURL({dynamic: true, size: 2048});
            const embed: Partial<MessageEmbed> = {
               color: 0x0f0,
               image: {
                url: avatar
                }
            }     
            message.channel.send({embed});  
        } catch (error) {
            message.channel.send("Something went wrong");
        } 
    }
);
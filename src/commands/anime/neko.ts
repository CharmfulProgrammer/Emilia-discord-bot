import Command from "../../selfUtils/commandFrame";
import Embed from "../../selfUtils/discordEmbedType";
import Neko from "nekos.life";
const {sfw} = new Neko();

export const command: Command = {
    name: "neko",
    description: "Shows a random neko girl picture",
    async execute(message, args){
        const data = await sfw.neko();
        const embed: Partial<Embed> = {
            title: "Nya~~~",
            color: "#41d18b",
            image: {
                url: data.url
            }
        } 
        message.reply({embed});
    }
}
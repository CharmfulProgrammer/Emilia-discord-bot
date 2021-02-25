import {Message, User} from "discord.js";

const fetchUser = (message: Message, args: string[]): User => {
    const fullName = args.join(" ");
    if(!args.length && !message.mentions.users.size){
        return message.author;
    }else{
        return message.mentions.users.first() ||
        message.guild.members.cache.get(args[0])?.user ||
        message.guild.members.cache.find(member => {
            const {user: {username}, displayName} = member;
            const [usrname, nickname] = [username.toLowerCase(), displayName.toLowerCase()];
            return nickname.includes(fullName) || usrname.includes(fullName);
        })?.user;
    }
}

export default fetchUser;
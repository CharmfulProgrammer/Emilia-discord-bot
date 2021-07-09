import command from "types/commandType";
import User from "../../database/models/bot_user";

export default {
    name: "balance",
    description: "Check how many <a:diamonds:862417192012087343> you have",
    usage: "balance",
    async execute(message) {
        let user = await User.findOne({
            where: {
              userID: message.author.id,
            },
          });
          if (user == null) {
            user = await User.create({ userID: message.author.id });
          }
          message.channel.send("Your balance is " + user.coins + "<a:diamonds:862417192012087343>");
    }
} as command;
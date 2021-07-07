import command from "types/commandType";
import {User} from "database/models/bot_user";

export default {
  name: "daily",
  description: "in dev now",
  usage: "daily",
  async execute(message) {
      let user = await User.findOne({
        attributes: ["coins"],
        where: {
          user_id: message.author.id
        }
      });
      // if(user == null) {
      //   user = await User.build({ user_id: message.author.id });
      // }
      user.coins += 200
      await user.save();
      message.channel.send("You earned 200");
  },
} as command;

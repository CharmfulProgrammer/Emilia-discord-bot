import command from "types/commandType";
import User from "../../database/models/bot_user";

export default {
  name: "daily",
  description: "Take 200<a:diamonds:862417192012087343> after every 24 hours",
  usage: "daily",
  alias: ["weekly"],
  async execute(message) {
    const timeNow = +new Date();
    const dayInMili = 24 * 60 * 60 * 1000;
    try {
      let user = await User.findOne({
        where: {
          userID: message.author.id,
        },
      });
      if (user == null) {
        user = await User.create({ userID: message.author.id });
      }
      const timePassed = timeNow - Number(user.coinCollectedAt);
      console.log(timePassed, dayInMili, timeNow, user.coinCollectedAt, user.coins);
      if (timePassed < dayInMili) {
        const inMili = dayInMili - timePassed
        const timeRemaining = {
          inHours: Math.floor(inMili/60/60/1000),
          inMins: Math.floor(inMili/60/1000%60),
          inSecs: Math.floor(inMili/1000%60)
        }
        const {inHours, inMins, inSecs} = timeRemaining;
        return message.channel.send(`You can take your daily after ${inHours}:${inMins}:${inSecs}`);
      }

      await user.increment({
        coins: 200,
      });
      user.coinCollectedAt = timeNow;
      await user.save();
      message.channel.send(
        "You have earned 200<a:diamonds:862417192012087343>"
      );
      console.log(timePassed, dayInMili, timeNow, user.coinCollectedAt);
    } catch {
      message.channel.send("Something went wrong, try again");
    }
  },
} as command;

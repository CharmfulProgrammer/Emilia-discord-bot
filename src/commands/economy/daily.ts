import command from "types/commandType";
import User from "../../database/models/bot_user";

const miliSecsInHumanReadableFormat = (miliSecs) => {
  
    const inHours = Math.floor(miliSecs/60/60/1000);
    const inMins = Math.floor(miliSecs/60/1000%60);
    const inSecs = Math.floor(miliSecs/1000%60)
    
    const hrAndMin = (inHours && (inHours + " hours and ")|| "") + ((inMins > 1) && (inMins + " minutes") || "");
    const secs = inSecs + " seconds"
    return hrAndMin || secs;
}

export default {
  name: "daily",
  description: "Take 200<a:diamonds:862417192012087343> after every 12 hours",
  usage: "daily",
  alias: ["weekly"],
  async execute(message) {
    const timeNow = +new Date();
    const dayInMili = 12 * 60 * 60 * 1000;
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
      if (timePassed < dayInMili) {
        return message.channel.send(`You can collect your daily after ${miliSecsInHumanReadableFormat(dayInMili - timePassed)}`);
      }

      await user.increment({
        coins: 200,
      });
      user.coinCollectedAt = timeNow;
      await user.save();
      message.channel.send(
        "You have earned 200<a:diamonds:862417192012087343>"
      );
    } catch {
      message.channel.send("Something went wrong, try again");
    }
  },
} as command;

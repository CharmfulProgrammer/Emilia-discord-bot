import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

class User extends Model {
  public userID: string;
  public coins: number;
  public score: number;
  public coinCollectedAt: number;
}
User.init(
  {
    userID: {
      type: DataTypes.TEXT,
      primaryKey: true,
      allowNull: false,
    },
    coins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    coinCollectedAt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
  },
  {
    modelName: "botUser",
    tableName: "botUsers",
    freezeTableName: true,
    timestamps: false,
    sequelize,
  }
);
export default User;
// (async() => {
//   // await User.sync();
//   const user = await User.findOne({ where: { userID: "593537214231609357" }});
//   // console.log(user.coins)
//   await user.increment({
//     coins: 200
//   })
//   // await user.save();
//   // await user.save();
//   console.log("done");
// })();

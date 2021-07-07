import { DataTypes, Model, ModelDefined } from "sequelize";
import { sequelize } from "../database";

type userAttribute = {
  user_id: string;
  coins: number;
  score: number;
  coin_collected_at: number;
 }

type userUpdateAttribute = {
 coins?: number;
 score?: number;
 coin_collected_at?: number;
}

const user:ModelDefined<userAttribute, userUpdateAttribute> = sequelize.define("bot_user",
  {
    user_id: {
      type: DataTypes.TEXT,
      primaryKey: true,
      allowNull: false,
    },
    coins: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    coin_collected_at: {
      type: DataTypes.TIME,
    },
  },
  {
    tableName: "bot_users",
    freezeTableName: true,
    timestamps: false,
  }
);
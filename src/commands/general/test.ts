import Command from "../../selfUtils/commandFrame";
import {commandInfo} from "../../selfUtils/commandHandler";

export const command = new Command(
    "test",
    "test",
    "test",
    (message) => {
        console.log(commandInfo);
    }
);
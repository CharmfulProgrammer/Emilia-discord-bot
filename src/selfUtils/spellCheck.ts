import autoCorrect from "autocorrect";
import {commandInfo} from "./commandHandler"

const wordArr: string[] = [];
commandInfo.forEach(command => wordArr.push(command.name))

const result = (word: string) => {
	const resultWord = autoCorrect({words: wordArr})(word);
	return resultWord;
}

export default result;
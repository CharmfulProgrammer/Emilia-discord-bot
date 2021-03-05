import autocorrect from "autocorrect";

const result = (word: string, wordArr: string[]) => {
	const resultWord = autocorrect({words: wordArr})(word);
	return `Did you mean ${resultWord}`;
}

export default result;
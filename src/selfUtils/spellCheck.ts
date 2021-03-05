const spellCheck = (word: string, wordArr: string[]) => {
	const regex = new RegExp(`(${word.split("").join("|")})`, "g");
	const matchPercent = [...wordArr].map(newWord => newWord.match(regex)?.length / newWord.length * 100 - (word.length - newWord.length) * 10 || 0);
	return Math.max(...matchPercent) > 60 && wordArr[matchPercent.indexOf(Math.max(...matchPercent))] || "";
}
export default spellCheck;